import React from "react";

const Hero = () => {
 

    return (

<section className="bg-dark-purple text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto text-center">
      <h1
        className=" bg-gradient-to-r from-green-100 via-pink to-purple-600 bg-clip-text font-extrabold text-transparent text-7xl"
      >
        Partagez.
        Apprennez.
        Echangez

        <span className="sm:block"> </span>
        

      </h1>

      <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
      Nom, première plateforme gratuite d'échange de compétences.
      Elargissez votre réseau, monté en compétences et partager les votres.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded   bg-pink px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded bg-pink px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring  sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

);
};

export default Hero;
