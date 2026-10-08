import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css"
import Provider from "@/lib/Provider";
import ReduxProvider from "@/redux/ReduxProvider";
import InitUser from "@/InitUser";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pahiya- Safar Aasaan, Har Baar",
  description: "Pahiya is a modern vehicle booking platform designed to make everyday travel simple, convenient, and accessible. Whether you need a scooter, bike, or car, Pahiya helps users discover, book, and manage their rides through a smooth and intuitive experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ReduxProvider>
            <InitUser/>

           {children}
          </ReduxProvider>
      
        </Provider>
        
        

      </body>
    </html>
  );
}
