import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-devider";
import { Skills } from "@/components/skills";
import Qualification from "@/components/qualification";

export default function Home() {

  // renders the main content and components of the website
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
      <Qualification />
      <Contact />
    </main>
  );
}
