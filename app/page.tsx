import Navbar from "./_components/Navbar";
import FAQ from "./_components/FAQ"
import { Hero } from "./_components/Hero";
import { Spotlight } from "@/_components/ui/spotlight";
import { Footer } from "./_components/Footer";
import Sponsors from "./_components/Sponsors";
import Statistics from "./_components/StatCard";
import Offers from "./_components/Offerings";
import { ListTodo, FlaskConical, LoaderPinwheel, Waypoints } from "lucide-react";

const offerData = [
  {
    logo: <ListTodo style={{ width: '35px', height: '40px' }}/>,
    title: "Program Development",
    subtitle: "We help institutions design and run entrepreneurship programs, and connects them to Amrita's resource base."
  },
  {
    logo: <FlaskConical style={{ width: '35px', height: '40px' }}/>,
    title: "Startup Incubation",
    subtitle: "We offer resources, mentorship, and Incubation support to help student launch and grow their startups."
  },
  {
    logo: <LoaderPinwheel style={{ width: '35px', height: '40px' }}/>,
    title: "Student Leadership",
    subtitle: "We organize leadership workshops, recognizes student entrepreneurs, and fosters campus-based initiatives."
  },
  {
    logo: <Waypoints style={{ width: '35px', height: '40px' }}/>,
    title: "Mentorship",
    subtitle: "ACE boasts of a number of E-clubs and network of volunteers, inluding entrepreneurs and industry experts."
  }
]

export default function Home() {
  return (
    <div className="bg-black">
      <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-0"
      fill="orange"
      />
      <Navbar />
      <Hero />
      <Statistics />
      {/* TODO: Move this section to Offerings.tsx (Clean up task) */}
      <div className="w-full flex justify-center items-center mt-40 text-center">
      <span className="tex-center md:text-6xl text-5xl font-extrabold bg-gradient-to-b from-orange-500 via-orange-600 to-black bg-clip-text text-transparent">
        Empowering <span className="text-white font-bold">Students Through</span>
      </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 mb-5 place-items-center">
  {offerData.map((offer, index) => (
    <div key={index} className="max-w-full">
      <Offers {...offer} />
    </div>
  ))}
</div>




      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

