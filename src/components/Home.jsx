import HomeBanner from "./HomeBanner"
import IconSection from "./IconSection"
import Features from "./Features"
import FeaturesCount from "./FeaturesCount"
import HomeTrendProducts from "./HomeTrendProducts"
const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <IconSection></IconSection>
      <HomeTrendProducts></HomeTrendProducts>
      <Features></Features>
      <FeaturesCount></FeaturesCount>
    </div>
  )
}

export default Home