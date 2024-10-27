import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I&apos;m Ahmed, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Hello! I&apos;m a web developer and aspiring Generative Cloud AI
              Engineer with a passion for building cutting-edge solutions. With
              expertise in web development and a keen interest in AI and cloud
              technology, I&apos;m always looking to push the boundaries of
              what&apos;s possible. I&apos;m also a graphic designer, bringing a
              creative touch to my work. Let&apos;s explore the intersection of
              technology and innovation together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
