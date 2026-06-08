import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, User, Clock, Calendar } from "lucide-react";
import { posts, getPost } from "@/lib/blog-data";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SplitText } from "@/components/shared/SplitText";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: p ? [
        { title: `${p.title} — VertebraVita Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
      ] : [],
    };
  },
  component: BlogDetail,
  notFoundComponent: () => <div className="pt-40 text-center">Article not found</div>,
  errorComponent: () => <div className="pt-40 text-center">Something went wrong.</div>,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="pt-36 pb-10 bg-cream">
        <div className="mx-auto max-w-4xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />
          <SplitText as="h1" text={post.title}
            className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] text-forest" />
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone">
            <span className="inline-flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <article className="mx-auto max-w-3xl px-6 space-y-6">
          {post.body.slice(0, 3).map((b: any, i: number) => (
            <div key={i}>
              {b.heading && <h2 className="font-display text-3xl text-forest mt-10 mb-4">{b.heading}</h2>}
              <p className="text-lg text-charcoal leading-relaxed">{b.paragraph}</p>
            </div>
          ))}
          <div className="my-12 aspect-[16/10] rounded-2xl overflow-hidden">
            <img src={post.midImage} alt="" className="w-full h-full object-cover" />
          </div>
          {post.body.slice(3).map((b: any, i: number) => (
            <div key={i}>
              {b.heading && <h2 className="font-display text-3xl text-forest mt-10 mb-4">{b.heading}</h2>}
              <p className="text-lg text-charcoal leading-relaxed">{b.paragraph}</p>
            </div>
          ))}

          <div className="mt-14 rounded-2xl bg-sage/15 border border-sage/30 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-sage mb-4">Key Takeaways</p>
            <ul className="space-y-2 text-charcoal">
              {post.takeaways.map((t: string) => <li key={t} className="flex gap-3"><span className="text-gold">→</span><span>{t}</span></li>)}
            </ul>
          </div>
        </article>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Related Articles</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {related.map((r) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-xl text-forest group-hover:text-sage transition-colors">{r.title}</h3>
                <p className="text-sm text-stone mt-1">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Suffering from pain? Book a free consultation.</h2>
          <Link to="/contact"><MagneticButton variant="primary">Book Now <ArrowUpRight className="w-4 h-4" /></MagneticButton></Link>
        </div>
      </section>

      <section className="pb-20 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
