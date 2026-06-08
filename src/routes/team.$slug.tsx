import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Quote } from "lucide-react";
import { team, getMember } from "@/lib/team-data";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SplitText } from "@/components/shared/SplitText";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const m = getMember(params.slug);
    if (!m) throw notFound();
    return { member: m };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.member;
    return {
      meta: m ? [
        { title: `${m.name} — ${m.title} | VertebraVita` },
        { name: "description", content: m.bio.slice(0, 160) },
        { property: "og:title", content: `${m.name} — ${m.title}` },
        { property: "og:description", content: m.bio.slice(0, 160) },
        { property: "og:image", content: m.image },
      ] : [],
    };
  },
  component: TeamMemberDetail,
  notFoundComponent: () => <div className="pt-40 text-center">Member not found</div>,
  errorComponent: () => <div className="pt-40 text-center">Something went wrong.</div>,
});

function TeamMemberDetail() {
  const { member } = Route.useLoaderData();
  const related = team.filter((t) => t.slug !== member.slug).slice(0, 3);

  return (
    <>
      <section className="pt-36 pb-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Team", to: "/team" }, { label: member.name }]} />
        </div>
      </section>

      <section className="pb-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-sage mb-4">{member.title}</p>
            <SplitText as="h1" text={member.name}
              className="font-display text-5xl md:text-6xl text-forest leading-[1.02] mb-4" />
            <p className="text-stone mb-6">{member.credentials.join(" · ")}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {member.specializations.map((s: string) => (
                <span key={s} className="px-4 py-1.5 rounded-full bg-mint/40 text-forest text-xs uppercase tracking-[0.15em]">{s}</span>
              ))}
            </div>
            <p className="text-lg text-charcoal leading-relaxed">{member.bio}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Education & Certifications</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">A foundation built on years.</h2>
          <div className="space-y-6">
            {member.education.map((e: any) => (
              <div key={e.year} className="grid grid-cols-[100px_1fr] gap-6 items-baseline border-t border-cream/20 pt-5">
                <span className="font-mono text-gold">{e.year}</span>
                <span className="font-display text-2xl">{e.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote className="w-10 h-10 text-gold mx-auto mb-6" />
          <p className="font-display text-3xl md:text-4xl text-forest leading-[1.2] mb-6">"{member.testimonial.quote}"</p>
          <p className="text-xs uppercase tracking-[0.2em] text-stone">— {member.testimonial.patient}</p>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Book with {member.name.split(" ").slice(0, 2).join(" ")}</h2>
          <p className="text-cream/70 mb-10 max-w-xl mx-auto">Ready to start? Schedule a free consultation today.</p>
          <Link to="/contact"><MagneticButton variant="primary">Book Consultation</MagneticButton></Link>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">More Specialists</p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {related.map((r) => (
              <Link key={r.slug} to="/team/$slug" params={{ slug: r.slug }} className="group block">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <p className="mt-4 font-display text-xl text-forest">{r.name}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-stone">{r.title}</p>
              </Link>
            ))}
          </div>
          <Link to="/team" className="mt-16 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-forest hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
