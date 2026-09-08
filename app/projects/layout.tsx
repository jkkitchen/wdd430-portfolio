import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>
        <Link href="/projects">Projects</Link> | {' '}
        <Link href="/projects/settings">Settings</Link> | {' '}        
      </nav>
      {children}
    </section>
  );
}