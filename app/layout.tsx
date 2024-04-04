import Link from "next/link";
import "../styles/globals.css";
import SubscribeButton from "../components/Subscribe";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-2xl text-slate-700 font-bold mt-4">
            Rakshit's Blog
          </h1>
        </Link>
        <p className="text-slate-400">🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Pixegami, Swadhin, Rakshit</h3>
        <div className="flex justify-end">
          <SubscribeButton />
        </div>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
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
