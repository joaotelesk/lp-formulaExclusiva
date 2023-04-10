import { Head } from "@/components/Head";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head />
      <div className={`${montserrat.variable} montserrat`}>{children}</div>
    </>
  );
}
