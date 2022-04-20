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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Monda:wght@400;700&family=Roboto:wght@300;400;500;700&family=Poppings:wght@600&display=swap"
          rel="stylesheet"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section className="w-full bg-[#F7F7FC] min-h-screen items-center font-roboto px-2 py-6 justify-center flex flex-col ">
        <Link href="https://www.boostmyshop.com/">
          <a target="_blank">
            <img src="/img/bms-logo.svg" width={160} />
          </a>
        </Link>
        <h1 className="mt-4 text-2xl text-center font-semibold font-poppings text-slate-800">
          myPricing web brochure
        </h1>

        <Book />
      </section>
    </div>
  );
}
