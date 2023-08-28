import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 tv-static bg-white crt">
      <div className="bg-opacity-100 z-10">
        <div className="w-full">
          <p className="px-32 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            accusantium minus, quia vel mollitia ab officia animi voluptatem
            culpa? Assumenda blanditiis ex doloremque incidunt labore aliquam
            accusantium, ut necessitatibus magni!
          </p>
        </div>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
        <span className="scanline"></span>
      </div>
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-90 z-0"></div>
    </main>
  );
}
