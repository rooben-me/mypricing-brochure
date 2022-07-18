import { lazy, Suspense } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Book = lazy(() => import("../components/Book"));

export default function Home() {
  const LoadingBlock = () => {
    return (
      <div className="max-w-[1080px] mx-auto mt-8 h-[780px] flex items-center justify-center w-full bg-slate-100 border border-slate-200 rounded-lg">
        <p className="text-slate-700 animate-pulse font-inter">
          Loading Book...
        </p>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Boostmyshop marketing web brochure</title>
      </Head>
      <section className="w-full bg-[#F7F7FC] min-h-screen items-center font-roboto px-2 py-6 justify-center flex flex-col ">
        <Link href="https://www.boostmyshop.com/">
          <a target="_blank">
            <span className="sr-only">link to boostmyshop website</span>
            <Image
              src="/img/bms-logo.svg"
              alt="logo of boostmyshop"
              width={160}
              height={50}
              layout="fixed"
            />
          </a>
        </Link>
        <h1 className="mt-4 text-2xl text-center font-semibold font-poppings text-slate-800">
          myPricing web brochure
        </h1>
        <Suspense fallback={<LoadingBlock />}>
          <Book />
        </Suspense>
      </section>
    </div>
  );
}
