import React from 'react'
import Hero from '../components/Hero.jsx'
import HomeCards from '../components/HomeCards.jsx'
import JobListings from '../components/Joblistings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'

const HomePage = () => {
  return (
    <>
        <Hero title="Test Title" subtitle="Test Subtitle Message" />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage