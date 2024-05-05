import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Edutech</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="min-h-screen w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Gain mastery over your subjects
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Revolutionize your educational journey with our cutting-edge AI-powered platform, tailored to
                  personalize and optimize your learning experience.
                </p>
              </div>
              <div className="space-x-4">
                <Button href="#" variant="primary" className="bg-black text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen w-full py-12 flex justify-center items-center">
          <div className="container space-y-20 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transformative Learning Experiences</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform offers a comprehensive suite of features to revolutionize your educational
                  journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CpuIcon className="h-6 w-6 text-gray-500" />
                  <h3 className="text-lg font-bold">Adaptive Learning</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Our AI-powered platform adapts to your unique learning style and pace, ensuring personalized and
                  effective lessons.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <LayersIcon className="h-6 w-6 text-gray-500" />
                  <h3 className="text-lg font-bold">Interactive Content</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Engage with a wide range of interactive content, including multimedia lessons, quizzes, and
                  simulations, to enhance your learning experience.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <CompassIcon className="h-6 w-6 text-gray-500" />
                  <h3 className="text-lg font-bold">Personalized Guidance</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive personalized guidance and feedback from our AI-powered tutors, helping you overcome challenges
                  and achieve your learning goals.
                </p>
              </div>
              <div />
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <MountainIcon className="h-6 w-6 text-gray-500" />
                  <h3 className="text-lg font-bold">Comprehensive Analytics</h3>
                </div>
                <p className="text-sm text-gray-500">
                  Track your progress and performance with detailed analytics, insights, and recommendations to optimize
                  your learning outcomes.
                </p>
              </div>
              <div />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Careers</Link>
            <Link href="#">News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Platform</h3>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">API</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">Documentation</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Webinars</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Accessibility</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#">Sales</Link>
            <Link href="#">Support</Link>
            <Link href="#">Partnerships</Link>
            <Link href="#">Press</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}


function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}