import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import TanstackProvider from "@/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mayhem Live",
  description: "Videos for music mayhem games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={inter.className}>
        <TanstackProvider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </TanstackProvider>
      </body>
    </html>
  );
}
