import CTASection from '../components/CTASection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow">Services</p>
          <h1 className="heading-xl mt-4">Creative tech services for AI, web, and project growth</h1>
          <p className="body-lg mt-5 max-w-3xl">
            From AI chatbots and RAG systems to FastAPI backends, portfolios, and final year project support,
            NtShellcreations helps turn ideas into useful working solutions.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 sm:pb-20">
        <div className="section-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <CTASection
        title="Have a service request that is not listed?"
        description="Send the requirement on WhatsApp and NtShellcreations can shape it into a clear scope, feature list, and delivery plan."
      />
    </>
  );
}
