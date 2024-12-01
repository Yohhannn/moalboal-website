import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Moalboal Web",
  description: "Moalboal is a tropical escape renowned for white-sand beaches, vibrant coral reefs, and the famous sardine run. Dive into adventure or relax by the serene shores—Moalboal has it all.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
