import ContactCard from "@/components/ContactCard"; 


export default function About() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-8 px-4">This page shares information about my background and work.</p>
        <ContactCard name="Jessica Kitchen" email="jessica.kitchen@example.com" phone="(555) 123-4567" />
    </main>
  );
}
