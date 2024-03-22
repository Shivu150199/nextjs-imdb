import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Provider from "./Provider";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Imdb Movies app",
  description: "get all details of all the movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
           <Header/> 
        {children}
        </Provider>
        </body>
    </html>
  );
}
