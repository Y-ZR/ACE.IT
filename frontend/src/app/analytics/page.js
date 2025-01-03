"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SiStudyverse } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import GMATResults from "@/app/analytics/components/gmat-results";

export default function Analytics() {
  const [buttonStates, setButtonStates] = useState({
    twitter: false,
    linkedin: false,
    facebook: false,
  });

  // Toggle function for each button
  const toggleButton = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

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
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
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
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Quantitative Reasoning Practice Paper
              </h1>
              <Badge className="mb-4">Iteration 1</Badge>
              <div className="flex items-center justify-between w-full mb-8">
                <div className="flex flex-col items-start">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Overall GMAT Score
                  </span>
                  <span className="text-4xl font-bold text-primary-500">
                    760
                  </span>
                </div>
                <Button variant="primary">Review Feedback</Button>
              </div>
              <div className="w-full">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Performance by Topic
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Performance Topic 1 */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">
                        Word Problems
                      </span>
                      <span className="text-primary-500 font-bold">90%</span>
                    </div>
                    <Progress className="bg-primary-500" value={90} />
                  </div>
                  {/* Performance Topic 2 */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">
                        Combinatorics; Permutation and Combination
                      </span>
                      <span className="text-primary-500 font-bold">85%</span>
                    </div>
                    <Progress className="bg-primary-500" value={85} />
                  </div>
                  {/* Performance Topic 3 */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">
                        Number Properties
                      </span>
                      <span className="text-warning-500 font-bold">45%</span>
                    </div>
                    <Progress className="bg-warning-500" value={45} />
                  </div>
                  {/* Performance Topic 4 */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">
                        Geometry
                      </span>
                      <span className="text-danger-500 font-bold">50%</span>
                    </div>
                    <Progress className="bg-danger-500" value={50} />
                  </div>
                  {/* Performance Topic 5 */}
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-900 dark:text-gray-100 font-medium">
                        Statistics
                      </span>
                      <span className="text-primary-500 font-bold">30%</span>
                    </div>
                    <Progress className="bg-primary-500" value={30} />
                  </div>
                </div>
              </div>
              <div className="w-full mt-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Focus Areas
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-gray-900 dark:text-gray-100">
                      Word Problems
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-gray-900 dark:text-gray-100">
                      Combinatorics; Permutation and Combination
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full mt-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Areas For Improvement
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <XIcon className="w-5 h-5 mr-2 text-red-500" />
                    <span className="text-gray-900 dark:text-gray-100">
                      Number Properties
                    </span>
                  </li>
                  <li className="flex items-center">
                    <XIcon className="w-5 h-5 mr-2 text-red-500" />
                    <span className="text-gray-900 dark:text-gray-100">
                      Geometry
                    </span>
                  </li>
                  <li className="flex items-center">
                    <XIcon className="w-5 h-5 mr-2 text-red-500" />
                    <span className="text-gray-900 dark:text-gray-100">
                      Statistics
                    </span>
                  </li>
                </ul>
              </div>

              {/* Navigation Buttons */}
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-2">
                  <Link href="/dashboard">
                    <Button className="mt-8">
                      <HomeIcon className="w-5 h-5 mr-2" /> Back to Dashboard
                    </Button>
                  </Link>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-8">
                        <FaRegShareSquare className="w-5 h-5 mr-2" /> Share
                        Results
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-fit">
                      <DialogHeader>
                        <DialogTitle>Share your results</DialogTitle>
                        <DialogDescription>
                          Share your results with your friends and colleagues on
                          different platforms.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <GMATResults score={760} />
                        <div className="flex justify-center space-x-4 w-full">
                          <Button
                            variant={buttonStates.twitter ? "" : "outline"}
                            className="w-full"
                            onClick={() => toggleButton("twitter")}
                          >
                            <FaTwitter className="w-5 h-5 mr-2" /> Twitter
                          </Button>
                          <Button
                            variant={buttonStates.linkedin ? "" : "outline"}
                            className="w-full"
                            onClick={() => toggleButton("linkedin")}
                          >
                            <FaLinkedin className="w-5 h-5 mr-2" /> LinkedIn
                          </Button>
                          <Button
                            variant={buttonStates.facebook ? "" : "outline"}
                            className="w-full"
                            onClick={() => toggleButton("facebook")}
                          >
                            <FaFacebook className="w-5 h-5 mr-2" /> Facebook
                          </Button>
                        </div>
                      </div>
                      <DialogFooter className="relative">
                        <DialogClose>
                          <Button
                            type="button"
                            variant="secondary"
                            className="absolute left-0 bottom-0"
                          >
                            Close
                          </Button>
                        </DialogClose>
                        <Button type="submit">Share</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <Link href="/practice-paper2">
                  <Button className="mt-8">
                    <RiAiGenerate className="w-5 h-5 mr-2" /> Generate New Paper
                  </Button>
                </Link>
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
  );
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
  );
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
  );
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
  );
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
  );
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
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
