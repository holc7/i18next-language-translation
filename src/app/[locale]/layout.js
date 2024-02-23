import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Language-switcher",
  description: "Created with next-intl",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col max-w-4xl mx-auto">
          <Header />
        </div>
        <div className="flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
