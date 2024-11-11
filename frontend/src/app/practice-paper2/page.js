import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { SiStudyverse } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function PracticePaper2() {
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
          <div>
            <div className="flex flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
              {/* Practice Paper Header */}
              <header className="bg-gray-300 px-6 py-4 rounded-t-lg dark:bg-gray-800 flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Quantitative Reasoning Practice Paper
                </h2>
                <Badge className="size-xl">Iteration 2</Badge>
              </header>

              {/* Questions Section */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Question 1 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 1
                  </h3>
                  <p>
                    The mean and the median of seven distinct positive integers
                    is 30. If the seven integers are such that their product is
                    maximum, what is the product of the smallest and the largest
                    integers?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      111
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      180
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      210
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      891
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      900
                    </button>
                  </div>
                </div>
                {/* Question 2 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 2
                  </h3>
                  <p>
                    If (x<sup>3</sup>+y<sup>6</sup>) is positive, which of the
                    following must be true?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      x is positive
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      y is positive
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      x<sup>3</sup> is negative
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      (x+y<sup>2</sup>) and (x<sup>2</sup>+y<sup>4</sup>-xy
                      <sup>2</sup>) are either both positive or both negative
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      |x<sup>3</sup>| &lt; y<sup>6</sup>
                    </button>
                  </div>
                </div>
                {/* Question 3 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 3
                  </h3>
                  <p>
                    When a positive integer m is divided by another positive
                    integer n, the remainder obtained is 8. If <sup>m</sup>
                    &frasl;<sub>n</sub> = 89.32, what is the value of n?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      1
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      25
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      32
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      100
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      2225
                    </button>
                  </div>
                </div>
                {/* Question 4 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 4
                  </h3>
                  <p>
                    If the value of -2k+√(4-15k) is positive, which of the
                    following ranges represents the value of k?
                  </p>
                  <div className="mt-2 space-x-4">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      −4 &lt; k &lt; <sup>1</sup>&frasl;<sub>4</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      0 &lt; k &lt; <sup>1</sup>&frasl;<sub>4</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      k &lt; <sup>1</sup>&frasl;<sub>4</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      −4 &gt; k or k &gt; <sup>1</sup>&frasl;<sub>4</sub>
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                      −4 &lt; k &lt; 0
                    </button>
                  </div>
                </div>
                {/* Question 5 */}
                <div>
                  <h3 className="text-lg font-medium mb-2 underline">
                    Question 5
                  </h3>
                  <p>
                    In a certain class, a teacher distributed a few candies and
                    a few bars among the students such that each student got an
                    equal number of candies and an equal number of bars and no
                    candies or bars remained undistributed. How many students
                    were there in the class?
                  </p>
                  <p>(1) The teacher distributed 180 candies and 40 bars.</p>
                  <p>
                    (2) The total number of items received by each student was
                    less than 20.
                  </p>
                  <div className="mt-2 space-y-2">
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-left break-words">
                      Statement (1) ALONE is sufficient, but statement (2) ALONE
                      is not sufficient to answer the question asked.
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-left break-words">
                      Statement (2) ALONE is sufficient, but statement (1) ALONE
                      is not sufficient to answer the question asked.
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-left break-words">
                      BOTH statements (1) and (2) TOGETHER are sufficient to
                      answer the question asked, but NEITHER statement ALONE is
                      sufficient to answer the question asked.
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-left break-words">
                      EACH statement ALONE is sufficient to answer the question
                      asked.
                    </button>
                    <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-left break-words">
                      Statements (1) and (2) TOGETHER are NOT sufficient to
                      answer the question asked, and additional data specific to
                      the problem are needed.
                    </button>
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