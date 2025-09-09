export default function Home() {
  return (
    <main className="h-full">
      <div className="relative w-full h-full bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10 bg-[url('/space-portfolio/background.png')]"></div>
        <div className="absolute w-full h-[80%] bottom-[-30%] left-0 bg-contain bg-bottom bg-no-repeat z-20 bg-[url('/space-portfolio/earth.png')]"></div>
        <div className="absolute w-[150px] h-[150px] bottom-[35%] left-1/2 -translate-x-1/2 bg-contain bg-no-repeat z-30 bg-[url('/space-portfolio/astronaut.png')]"></div>
      </div>
    </main>
  );
}
