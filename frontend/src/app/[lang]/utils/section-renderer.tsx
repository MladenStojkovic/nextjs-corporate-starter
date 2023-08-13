import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import Clients from "../components/Clients";
import Product from "../components/Product";
import Hashtags from "../components/Hashtags";
import JoinUs from "../components/JoinUs";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.client-logos":
      return <Clients key={index} data={section}/>
    case "sections.product":
      return <Product key={index} data={section}/>
    case "sections.hashtags":
      return <Hashtags key={index} data={section}/>
    case "sections.join-us":
      return <JoinUs key={index} data={section}/>
    default:
      return null;
  }
}
