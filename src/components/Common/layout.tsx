// Components
import { Footer } from "./Footer";
import { Header } from "./Header";

// Utilities
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montSerrat",
});

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

// Hooks

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${montserrat.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
