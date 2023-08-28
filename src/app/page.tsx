import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 tv-static bg-white crt">
      <div className="bg-opacity-100 w-full z-10">
        <div className="w-full flex-col items-center">
          <h1 className="glitch py-4 text-8xl text-center">Caltech Crypto</h1>
          <p className="text-m text-center">
            &lt;p&gt; caltech crypto&apos;s home on the internet. leading the
            post-classical cryptographic movement. &lt;/p&gt;
          </p>
        </div>
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
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-70 z-0"></div>
    </main>
  );
}
