import CTASection from '../components/CTASection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Portfolio() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow">Portfolio</p>
          <h1 className="heading-xl mt-4">AI and creative technology project portfolio</h1>
          <p className="body-lg mt-5 max-w-3xl">
            A growing collection of AI platforms, assistants, automation systems, and portfolio tools that
            represent the NtShellcreations build direction.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 sm:pb-20">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <CTASection
        title="Want a project like these?"
        description="Share your idea, target users, and deadline. NtShellcreations can help plan, build, document, and polish the project."
      />
    </>
  );
}
