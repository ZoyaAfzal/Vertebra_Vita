import { createFileRoute } from "@tanstack/react-router";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { ContactCTA } from "@/components/home/ContactCTA";
import { SplitText } from "@/components/shared/SplitText";
import { Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VertebraVita" },
      { name: "description", content: "Book your free consultation or get in touch with VertebraVita." },
      { property: "og:title", content: "Contact VertebraVita" },
      { property: "og:description", content: "Book your free consultation today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-sage">Get In Touch</p>
          <SplitText as="h1" text="Let's start your recovery."
            className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-forest max-w-4xl" />
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 gap-6">
          {[
            { icon: Mail, label: "Email", value: "care@vertebravita.com" },
            { icon: Clock, label: "Hours", value: "Mon–Fri 7am–8pm\nSat 8am–4pm" },
          ].map((c) => (
            <div key={c.label} className="p-6 rounded-2xl bg-card border border-forest/10">
              <c.icon className="w-5 h-5 text-gold mb-4" />
              <p className="text-xs uppercase tracking-[0.18em] text-sage mb-2">{c.label}</p>
              <p className="text-forest whitespace-pre-line">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
