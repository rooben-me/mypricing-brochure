import Head from "next/head";
import Link from "next/link";
import Book from "../components/Book";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Boostmyshop marketing web brochure</title>
        <meta name="description" content="Boostmyshop marketing web brochure" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section className="w-full bg-[#F7F7FC] min-h-screen items-center justify-center flex flex-col ">
        <Link href="https://www.boostmyshop.com/">
          <a target="_blank">
            <img src="/img/bms-logo.svg" className="mt-8" />
          </a>
        </Link>
        <h1 className="mt-4 text-2xl font-semibold text-slate-600">
          myPricing web brochure
        </h1>
        <div className="px-4 py-2 mt-8 mb-4 bg-slate-100 rounded-lg border border-slate-200">
          <p className="text-indigo-600">
            Click the below image or hover over the image
          </p>
        </div>
        <Book />
        <div className="h-8" />
      </section>
    </div>
  );
}
