import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    postman,
    figma,
    wordpress,
    shopify
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 " id="technologies">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="hover:scale-105 duration-300 cursor-pointer" src={html} title="html" alt="" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={css} title="CSS" alt="" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={js} title="JavaScript" alt="" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={react} title="React" alt="" />
    
        <img className="hover:scale-105 duration-300 cursor-pointer" src={tailwind} title="Tailwind CSS" alt="" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={bootstrap} title="Bootstrap" alt="" />
       
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="hover:scale-105 duration-300 cursor-pointer" src={vscode} title="Visual Studio Code" alt="" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={git} title="Git" alt="Git" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={github} title="Github" alt="Github" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={figma} title="Figma" alt="Figma" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={postman} title="Postman" alt="Postman" />
      </section>
       <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Platforms
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="hover:scale-105 duration-300 cursor-pointer" src={wordpress} title="Visual Studio Code" alt="" />
        <img className="hover:scale-105 duration-300 cursor-pointer" src={shopify} title="Git" alt="Git" />

      </section>
    </main>
  );
}

export default Technologies;
