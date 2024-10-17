export default function Home() {
  return (
    <div className="bg-[url('/image.webp')] bg-cover bg-center relative h-screen w-full flex items-center justify-center">
      <div className="bg-white border-2 bg-opacity-70 border-dashed border-black p-6 rounded-lg my-4 max-w-lg mx-4 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl text-black font-bold mb-4 drop-shadow-lg">Hello World</h1>
          <p className="text-left text-lg sm:text-xl pl-2">
            Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions.
            With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries 
            of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection 
            of technology and innovation together!
          </p>
        </div>
      </div>
    </div>
  );
}
