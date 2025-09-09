export default function Home() {
  return (
    <main className="h-full">
      <div className="relative w-full h-full bg-black overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10 bg-[url('/space-portfolio/background.png')]"></div>

        {/* Earth Container */}
        <div className="absolute w-full h-full left-0 z-20 bottom-[-75%]">
            <div className="w-full h-full bg-contain bg-bottom bg-no-repeat bg-[url('/space-portfolio/earth.png')] relative">
                {/* Astronaut (nested) */}
                <div className="absolute w-[150px] h-[150px] top-[20%] left-1/2 -translate-x-1/2 bg-contain bg-no-repeat z-30 bg-[url('/space-portfolio/astronaut.png')]"></div>
            </div>
        </div>
      </div>
    </main>
  );
}
