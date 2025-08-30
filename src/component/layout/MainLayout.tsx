import About from "./About";
import BlogPortfolioSection from "./Blog";
import Contact from "./contact";
import Footer from "./footar";
import Header from "./header";
import Home from "./Home";
import ServicesSection from "./Services";
import Testimonials from "./testimonials";
import Timeline from "./Timeline";

const Portfolio = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <ServicesSection></ServicesSection>
      <BlogPortfolioSection></BlogPortfolioSection>
      <Timeline></Timeline>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export { Portfolio };
