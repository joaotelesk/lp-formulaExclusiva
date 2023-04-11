import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montSerrat",
});

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}
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
