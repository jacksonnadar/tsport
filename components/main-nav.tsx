import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import logo from "../assets/logo.svg"
import { Button } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="logo" className="w-24" />
      </Link>
      {items?.length ? (
        <nav className="flex gap-3">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <Button className="py-1 text-primary" variant={"ghost"}>
                    <item.icon className="h-4" /> <span> {item.title}</span>
                  </Button>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
