"use client"
import * as React from "react"
import Link from "next/link"
import { User, Code, Briefcase, Mail, Home } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="bg-white/10 backdrop-blur-md rounded-full px-2 py-1">
        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild 
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 text-gray-800 font-medium transition-all duration-300`}
          >
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2"
            >
              <Home size={16} />
              <span>Home</span>
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild 
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 text-gray-800 font-medium transition-all duration-300`}
          >
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2"
            >
              <User size={16} />
              <span>About</span>
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild 
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 text-gray-800 font-medium transition-all duration-300`}
          >
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-2"
            >
              <Code size={16} />
              <span>Skills</span>
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild 
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 text-gray-800 font-medium transition-all duration-300`}
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2"
            >
              <Briefcase size={16} />
              <span>Projects</span>
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild 
            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 text-gray-800 font-medium transition-all duration-300`}
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2"
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
