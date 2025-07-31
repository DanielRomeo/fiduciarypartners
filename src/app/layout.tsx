
// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css';
import './styles/main.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fiduciary Partners - Legal Support Services",
  description: "Professional legal support services for entrepreneurs and businesses. Company formation, compliance, documentation, and business development solutions.",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}