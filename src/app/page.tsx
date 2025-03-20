import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_50px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header/Navigation */}
      <header className="w-full flex justify-between items-center row-start-1">
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg" // Consider replacing with your own logo
            alt="FlashStudy Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-xl">GenStudy</span>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#how-it-works" className="hover:underline">How It Works</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </nav>
        <button className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700">
          Sign Up
        </button>
      </header>

      <main className="flex flex-col gap-[40px] row-start-2 items-center w-full max-w-6xl">
        {/* Hero Section */}
        <section className="text-center flex flex-col gap-4 items-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Turn <span className="text-blue-600">PDFs</span> into <span className="text-green-600">Study Materials</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl text-gray-600 dark:text-gray-300">
            Upload any PDF and instantly generate flashcards and quizzes to improve your learning experience.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              className="rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors"
              href="/upload"
            >
              Try it Now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              href="#how-it-works"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Demo/Preview Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 flex items-center justify-center">
            <p className="text-xl font-semibold">App Preview Image</p>
            {/* Replace with an actual preview image of your app */}
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-12">
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Conversion</h3>
            <p className="text-gray-600 dark:text-gray-300">Upload your PDF and get study materials in seconds.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Multiple Formats</h3>
            <p className="text-gray-600 dark:text-gray-300">Create flashcards, quizzes from your documents.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
            <p className="text-gray-600 dark:text-gray-300">Our Ai Agents extract key concepts for effective studying.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl text-center my-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to transform your study materials?</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Join thousands of students who are studying smarter, not harder.</p>
          <a
            className="rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors inline-block"
            href="/signup"
          >
            Get Started for Free
          </a>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full border-t border-gray-200 dark:border-gray-800 pt-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/privacy"
        >
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"
        >
          Terms of Service
        </a>
        <p className="text-sm text-gray-500 mt-4 w-full text-center">
          © 2025 GenStudy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
