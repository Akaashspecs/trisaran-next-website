import Footer from "@/components/footer";
import Header from "@/components/header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Trisaran Money - Loans Made Easy",
  description:
    "Apply for instant loans, personal loans, business loans, home loans and more. Fast approval & minimal documentation.",

  icons: {
    icon: [
      { url: "/favv.ico" },
      { url: "/Trisaran-logo.png", type: "image/png", sizes: "32x32" },
      { url: "/Trisaran-logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/Trisaran-logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${poppins.className} `}>
        <Header />
        <main className="flex-1 grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
