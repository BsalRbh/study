import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SubjectNav } from "@/components/SubjectNav";
import { BadgeToastHost } from "@/components/BadgeToastHost";
import { ProgressProvider } from "@/lib/progress/context";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exam Prep Hub",
  description: "Multi-subject exam prep: flashcards, quizzes, and gamified study tracking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <ProgressProvider>
            <SubjectNav />
            <main className="flex-1">{children}</main>
            <BadgeToastHost />
          </ProgressProvider>
        </Providers>
      </body>
    </html>
  );
}
