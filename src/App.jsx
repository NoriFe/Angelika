
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import Testimonials from './components/Testimonials';


const App = () => {
  return (
    <>
      <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Hero />
          <FeatureSection />
          <WorkFlow />
          <Testimonials />

        </div>
    </>

  )
}

export default App
