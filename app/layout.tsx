import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import ThemeToggle from "./components/ThemeToggle";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "션북스 - Seanbooks Publishing",
  description: "션북스 출판사 공식 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKr.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                      션북스
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="/books" className="inline-flex items-center px-1 pt-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      도서
                    </a>
                    <a href="/about" className="inline-flex items-center px-1 pt-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      소개
                    </a>
                    <a href="/contact" className="inline-flex items-center px-1 pt-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      연락처
                    </a>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                  <ThemeToggle />
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    유튜브
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    인스타그램
                  </a>
                  <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    블로그
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
