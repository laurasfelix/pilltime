import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="container">
      <div className="welcome">
        <Image src="/pilltime.svg" alt="" width={200} height={200} />
        Welcome to PillTime!
      </div>

      <div className="under-welcome">
        Don't be scared to take your medicine anymore.
      </div>

      <div className="signup">
        <button> sign up </button>
      </div>

      <div className="signin">
        <button> sign in </button>
      </div>

      <div className="page-end">
        owned by PillTime! LLC
      </div>
      
    </div>
  );
}
