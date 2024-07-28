import Link from "next/link";
import "../styles/globals.css";
import SubscribeButton from "../components/Subscribe";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Rakshit's Blog",
  description: "Machine Learning indepth articles.",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-2xl text-slate-700 font-bold mt-1">
            Rakshit's Blog
          </h1>
        </Link>
        <p className="text-black-800">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className=" border-slate-400 mt-12 py-6 text-center text-slate-400">
      <div className="flex justify-center mb-1">
          <SubscribeButton />
        </div>
      <h3>Designed by Pixegami, Swadhin, Sonali, Mayur, Prasad, Rakshit</h3>

      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto  max-w-5xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
