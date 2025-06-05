import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "../Components/Header";

function Home() {
  const { name, tagline, img ,web } = personalDetails;
  // const h11 = useRef();
  // const h12 = useRef();
  // const h13 = useRef();
  // const myimageref = useRef();
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from(
  //     h11.current,
  //     {
  //       x: "-100%",
  //       delay: 0.8,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "Power3.easeOut",
  //     },
  //     "<"
  //   )
  //     .from(
  //       h12.current,
  //       {
  //         x: "-100%",
  //         delay: 0.5,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     )
  //     .from(
  //       h13.current,
  //       {
  //         x: "-100%",
  //         delay: 0.1,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     )
  //     .from(
  //       myimageref.current,
  //       {
  //         x: "200%",
  //         delay: 0.5,
  //         opacity: 0,
  //         duration: 2,
  //         ease: "Power3.easeOut",
  //       },
  //       "<"
  //     );
  // }, []);

  return (
  <div className="bg-[#fff] text-[#292929]">
    <Header />
    <main className="container mx-auto max-width mt-10 md:mt-28 md:flex justify-between items-center">
      <div>
        <h1
          // ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>I'm <span className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">{name}</span> <br></br>
        </h1>
        {/* <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1> */}
        <h2
          // ref={h13}
          className="text-2xl mt-6 md:text-4xl xl:text-4xl xl:leading-tight font-bold"
        >
         {tagline}<br/>
          {web}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img 
        // ref={myimageref}
        className="w-[420px] md:ml-auto hover:scale-110 duration-500 cursor-pointer" src={img} alt="coding" />
      </div>
    </main>

    <About/>
    <Technologies/>
    <Projects/>
    <Contact/>
  </div>
  );
}

export default Home;
