import CustomerNumber from "@/components/CustomerNumber";
import Emi from "@/components/Emi";
import Features from "@/components/Features";
import Intro from "@/components/Intro";
import Register from "@/components/Register";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";

function Home() {
  return (
    <div className="  ">
      <Intro />
      <Features />
      <CustomerNumber />
      <Emi />
      <Trust />

      <Testimonials />
      <Register />
    </div>
  );
}

export default Home;
