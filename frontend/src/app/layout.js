import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
            <nav className="flex justify-evenly items-center pt-5 pb-8">
              <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-1xl text-sm">
                <a href="/" className="text-white mr-5 hover:text-[#ef4444]">
                  Home
                </a>
                <a href="/components/myProjects" className="text-white mr-5 hover:text-[#ef4444]">
                  Meus Projetos
                </a>
                <a href="/components/profile" className="text-white mr-5 hover:text-[#ef4444]">
                  Perfil
                </a>
              </div>
            </nav>
          </header>
          <footer className="absolute bottom-0 bg-[#ef4444] text-white w-full py-2">
            <span className="block text-xs sm:text-center">© 2024 <a href="https://www.linkedin.com/in/marcelocalsing/" target="_blank">Marcelo Calsing</a>. All Rights Reserved.</span>
          </footer>
        {children}</body>
    </html>
  );
}