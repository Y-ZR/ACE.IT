import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { SiStudyverse } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function PracticePaper1() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full flex-col gap-2">
          {/* Sidebar Header */}
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center justify-center" href="/">
              <SiStudyverse className="w-5 h-5" />
              <span className="text-lg font-extrabold text-black ml-1">
                <span className="text-[#a28231]">A</span>CE.
                <span className="text-[#a28231]">I</span>T
              </span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:bg-gray-800 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalculatorIcon className="h-4 w-4" />
                Quantiative Reasoning
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <BookIcon className="h-4 w-4" />
                Verbal Reasoning
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="mt-auto p-4 sticky bottom-0">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited iterations for each
                  subject, and many more!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col">
        {/* Header */}
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">Quantitative Reasoning</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-400 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <FaUser height="40" width="40" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="">
            <div className="flex flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
              {/* Practice Paper Header */}
              <header className="bg-gray-300 px-6 py-4 rounded-t-lg dark:bg-gray-800 flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Quantitative Reasoning Practice Paper
                </h2>
                <Badge className="size-xl">Iteration 1</Badge>
              </header>

              {/* Questions Section */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Question 1 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 1
                  </h3>
                  <p>
                    A box contains 20 balls, of which 12 are red and 8 are blue.
                  </p>
                  <p>
                    If two balls are to be drawn from this box at random without
                    replacement, what is the probability that one ball will be
                    red and the other will be blue?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      <sup>1</sup>&frasl;<sub>96</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      <sup>6</sup>&frasl;<sub>25</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      <sup>24</sup>&frasl;<sub>95</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      <sup>24</sup>&frasl;<sub>95</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      1
                    </button>
                  </div>
                </div>
                {/* Question 2 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 2
                  </h3>
                  <p>
                    The population of City X increased from 2 million in the
                    year 2000 to 2.5 million in 2015 and the gross domestic
                    product of the city in 2000 was <sup>3</sup>&frasl;
                    <sub>8</sub> less than that in 2015. What was the
                    approximate percent change, rounded to the nearest integer
                    if required, in the per capita gross domestic product of the
                    city from 2000 to 2015?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      22% decrease
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      22% increase
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      28% increase
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      53% increase
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      113% increase
                    </button>
                  </div>
                </div>
                {/* Question 3 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 3
                  </h3>
                  <p>Given that:</p>
                  <p>4m + n = 20; and</p>
                  <p>|n| ≤ 20</p>
                  <p>
                    How many ordered pairs (m, n) exist in which m and n both
                    are integers?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      Five
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      Six
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      Ten
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      Eleven
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      Forty-one
                    </button>
                  </div>
                </div>
                {/* Question 4 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 4
                  </h3>
                  <p>
                    Company X sold 1,500 units of its product for $9 each and
                    750 units for $6 each. If the company&apos;s cost of
                    producing each unit of the product was $7, what was the
                    company&apos;s profit or loss on the sale of 2,250 units?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      $2250 loss
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      $750 loss
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      No profit or loss
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      $2250 profit
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      $18,000 profit
                    </button>
                  </div>
                </div>
                {/* Question 5 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 5
                  </h3>
                  <p>
                    In a parallelogram, the ratio of the two adjacent sides is
                    1:2. If the area of the parallelogram is 36&radic;2 square
                    unit and the angle between the two sides is 45°, what is the
                    area, in square unit, of the rectangle whose smaller side is
                    equal to the smaller side of the parallelogram and the
                    larger side is equal to the larger side of the
                    parallelogram?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      36
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      36&radic;2
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      72
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      96
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      144
                    </button>
                  </div>
                </div>

                {/* SAQ Question Example */}
                {/* <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question ?
                  </h3>
                  <p>
                    Explain the process of neutralization between an acid and a
                    base.
                  </p>
                  <div className="mt-2 space-x-4">
                    <textarea className="w-full p-2 h-24 rounded-md bg-gray-200" />
                  </div>
                </div> */}
              </div>

              {/* Footer */}
              <footer className="bg-gray-100 px-6 py-4 rounded-b-lg flex justify-between items-center dark:bg-gray-800">
                <Button className="px-4 py-2 rounded-md text-white">
                  <FaAngleLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm ">Page 1 of 10</span>
                <Link href="/analytics">
                  <Button className="px-4 py-2 rounded-md text-white">
                    <FaAngleRight className="h-4 w-4" />
                  </Button>
                </Link>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Icon components
function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function CalculatorIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  )
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}