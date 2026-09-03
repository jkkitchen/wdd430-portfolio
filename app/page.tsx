import Image from "next/image";
//Added based on assignment instructions
import ProjectLists from '@/components/ProjectList';

const projects = [
  {
    title: 'Library App',
    description: 'An app for tracking library inventory and patrons.',
    technologies: 'Node.js, Express, MongoDB, Mongoose, Javascript, Google OAuth, GitHub, Render',
    projectUrl: 'https://cse341-finalproject-nlyf.onrender.com/'
  },
  {
    title: "SleepOutside",
    description: "An outdoor gear store that allows users to browse and purchase camping and hiking equipment.",
    technologies: "Netlify, Javascript, JSON",
    projectUrl: "https://sleep-outside-team1-2025.netlify.app/"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="w-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-8">
            I'm Jessica Kitchen, here are some of my projects:
          </p>
          <ProjectLists projects={projects} />
        </section>
      </main>
    </div>
  );
}
