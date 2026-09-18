import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>
        <Link href="/projects">Projects</Link> | {' '}               
      </nav>
      {children}
    </section>
  );
}