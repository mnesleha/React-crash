import Hero from "./components/Hero.jsx"
import Navbar from "./components/navbar.jsx"
import HomeCards from "./components/HomeCards.jsx"
import JobListings from "./components/Joblistings.jsx"

const App = () => {

  return (

    <>
    <Navbar />
    <Hero title="Test Title" subtitle="Test Subtitle Message" />
    <HomeCards />
    <JobListings />


    {/* Browse Jobs */}


    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>

  )
}

export default App