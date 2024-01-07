import Head from "next/head";
import Image from "next/image";
import { Button, Typography, Container, Grid } from "@material-ui/core";
import landingPage from "@/assets/landinPageBG.jpg";
import landing from "@/assets/landingPage.svg";
import backGround from "@/assets/background.svg";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/logo.png";

const LandingPage = () => {
  const router = useRouter();

  return (
    <main className="bg-gray-100 min-h-screen overflow-auto flex items-center flex-col justify-center font-montserrat">
      <header className="h-24 sm:h-32 flex items-center mt-5 w-full">
        <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
          <div className="font-black text-blue-900 text-2xl sm:text-3xl flex items-start">
            Momayaz
          </div>
          <div className="flex items-center">
            <nav className="text-purple-900 text-lg lg:text-xl flex items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Sign in
              </button>
            </nav>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row relative">
        <div className="sm:w-6/12 relative z-10">
          <Image src={landing} alt="Landing Page" className="w-full" />
        </div>
        <div className="sm:w-5/12 xl:w-4/12 flex flex-col items-start sm:items-end sm:text-right ml-auto mt-8 sm:mt-0 relative z-10 xl:pt-20 mb-16 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-900 leading-none mb-4 font-black">
            Manage Your Business Listings with Momayaz
          </h1>
          <p className="lg:text-lg mb-4 sm:mb-12 text-blue-900">
            Welcome to our business listing landing page, where opportunities
            unfold and connections thrive. Explore a curated collection of
            diverse enterprises, from innovative startups to established
            industry leaders. Your gateway to a network of possibilities awaits
            – discover, engage, and elevate your business journey with us.
          </p>
          <a
            href="#"
            className="font-semibold text-lg bg-purple-600 hover:bg-blue-400 text-white py-3 px-12 rounded-full"
            onClick={() => {
              router.push("/signin");
            }}
          >
            Get Start
          </a>
        </div>
        <Image
          src={backGround}
          alt="bg"
          className="w-full absolute bottom-0 left-0"
        />
      </div>
    </main>
  );
};

export default LandingPage;
