"use client";

import React from "react"
import Link from "next/link"
import { SiStudyverse } from "react-icons/si";
import { useEffect, useState } from "react";
import {
  Card,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function ProficiencyFormPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)
  const [showPanel2, setShowPanel2] = React.useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f4f4eb] relative">
      <header className={`fixed top-0 left-0 right-0 flex items-center p-4 border-b transition-all duration-300 z-10 ${isScrolled ? "backdrop-blur-md bg-opacity-30" : "bg-opacity-100"}`}>
        <Link className="flex items-center justify-center" href="/">
          <SiStudyverse className="w-5 h-5" />
          <span className="text-lg font-extrabold text-black ml-1">
            <span className="text-[#a28231]">A</span>CE.<span className="text-[#a28231]">I</span>T
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/proficiency-form">
            Demo
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
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
        <section className="flex flex-col items-center justify-center min-h-screen">

          <Card className="p-8 space-y-4 w-[40%] ">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Preliminary Proficiency Form</h1>
              <p className="text-gray-500 dark:text-gray-400">Input your subject details to have your very own customized AI tutor to help you generate personalized practice papers.</p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Educational Level</Label>
                <Select id="educational-level">
                  <SelectTrigger>
                    <SelectValue placeholder="Select educational level"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sec1">Secondary 1</SelectItem>
                    <SelectItem value="sec2">Secondary 2</SelectItem>
                    <SelectItem value="sec3">Secondary 3</SelectItem>
                    <SelectItem value="sec4">Secondary 4</SelectItem>
                    <SelectItem value="sec5">Secondary 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex flex-col">
                <Label htmlFor="subject">Subject(s)</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="text-left">Subject(s) you would like to focus in</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Subject(s)</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      O Levels Chemistry
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showActivityBar}
                      onCheckedChange={setShowActivityBar}
                    >
                      O Levels Physics
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel}
                      onCheckedChange={setShowPanel}
                    >
                      O Levels Biology
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={showPanel2}
                      onCheckedChange={setShowPanel2}
                    >
                      O Levels Mathematics
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-2">
                <Label htmlFor="proficiency">Proficiency Level</Label>
                <Select id="proficiency">
                  <SelectTrigger>
                    <SelectValue placeholder="Select you current proficiency level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time Allocation</Label>
                <Input id="time" placeholder="Enter the time you would like to spend in each practice round (in minutes)" required type="number" />
              </div>
              
              <div className="space-y-2">
                <Link className="w-full" href="/dashboard">
                  <Button className="w-full" type="submit" style={{ marginTop: '1rem' }}>
                    Submit
                  </Button>
                </Link>
                </div>
            </form>
          </Card>

        </section>
      </main>

      <footer className="bg-gray-300 p-6 md:py-12 w-full">
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