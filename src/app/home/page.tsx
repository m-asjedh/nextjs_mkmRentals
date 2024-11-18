"use client";
import Footer from "@/components/Footer";
import Timer from "@/components/lottie_animations/Timer";
import Navbar from "@/components/Navabar";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="relative flex flex-1 px-8">
          <div className="flex-1 flex flex-col items-start justify-center pl-16">
            <h1 className="text-5xl mt-52">
              Find, book, rent a car quick and super easy!
            </h1>

            <p className="text-2xl mt-4">
              Streamline your car rental experience with our effortless booking
              process.
            </p>

            <button className="bg-blue-600 rounded-full mt-10 p-3">
              Explore Cars
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="absolute left-0 right-0 top-10 z-10">
              <Image
                src="/hero-bg.png"
                alt="Hero Background"
                layout="responsive"
                width={700}
                height={400}
                objectFit="contain"
              />
            </div>
            <div className="absolute inset-0 z-20 top-20 right-20">
              <Image
                src="/hero.png"
                alt="Hero Image"
                layout="responsive"
                width={600}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        {/* What's New Section */}
        <div className="mx-20 mt-20">
          <h1 className="text-center text-3xl font-semibold mb-10">
            What&apos;s New
          </h1>
          <div className="w-full h-52 bg-blue-600 text-white rounded-3xl flex items-center justify-between px-20">
            <div>
              <h2 className="text-3xl text-center px-4">
                Now You Can Hire <br /> a Bus <br /> Limited OFFER !!!
              </h2>
            </div>
            <div>
              <Timer />
            </div>
            <div>
              <Image src="/bus.png" alt="Bus" width={300} height={100} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
