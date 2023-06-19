"use client"

import { forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Avatar } from "@radix-ui/react-avatar"
import {
  BellPlus,
  Calendar,
  CalendarDays,
  Circle,
  Clock,
  Cloud,
  CreditCard,
  Github,
  Grid,
  Highlighter,
  Home,
  IndianRupee,
  Keyboard,
  LifeBuoy,
  ListVideo,
  LogOut,
  Mail,
  MessageSquare,
  Newspaper,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Swords,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import ReactCountryFlag from "react-country-flag"

import banvsaus from "../assets/banvsaus.webp"
import indvsaus from "../assets/indvsaus.webp"
import logo from "../assets/logo.svg"
import thumbnail1 from "../assets/thumbnail1.jpg"
import thumbnail2 from "../assets/thumbnail2.png"
import thumbnail3 from "../assets/thumbnail3.png"
import thumbnail4 from "../assets/thumbnail4.jpg"
import thumbnail5 from "../assets/thumbnail5.jpg"
import thumbnail6 from "../assets/thumbnail6.jpg"
import thumbnail7 from "../assets/thumbnail7.jpg"
import thumbnail8 from "../assets/thumbnail8.jpg"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Input } from "./ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Separator } from "./ui/separator"

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-20 w-full ">
      <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-lg"></div>
      <div className="flex h-20 items-center space-x-4 px-10 sm:justify-between sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <div className="z-40 flex">
          <Link href="/" legacyBehavior passHref>
            <Image src={logo} alt="tsports" className="mr-3 w-20" />
          </Link>
          <CustomNavigationMenu />
        </div>
        <div className="z-100 flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-3 space-x-1">
            <Button className="rounded-sm">
              <Search /> <span className="sr-only">Search</span>
            </Button>
            <CustomUserDropDown />
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const mainNav = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Live",
    href: "/",
    icon: Circle,
    children: NavLiveChildren,
  },
  {
    title: "Highlights",
    href: "/",
    icon: Highlighter,
    children: NavHighlightsChildren,
  },
  {
    title: "Fixtures",
    href: "/",
    icon: CalendarDays,
    children: NavFixturesChildren,
  },
  {
    title: "ScoreBoard",
    href: "/",
    icon: Grid,
    children: NavScoreBoardChildren,
  },
  {
    title: "Buy",
    href: "/",
    icon: IndianRupee,
    children: NavBuyChildren,
  },
  {
    title: "News",
    href: "/",
    icon: Newspaper,
    children: NavNewsChildren,
  },
]

function NavLiveChildren() {
  return (
    <div className="flex w-full flex-col md:w-[550px] lg:w-max lg:max-w-[800px]">
      <div className="flex  items-center gap-2 pt-4">
        <h3 className="scroll-m-20 pl-4 text-left text-xl font-semibold tracking-tight text-primary">
          LIVE
        </h3>

        <Circle className="text-red-500" />
      </div>
      <div className="flex w-full  flex-wrap gap-3 p-4">
        <div className="relative w-60 overflow-hidden rounded-sm ">
          <Image src={thumbnail1} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>BAN vs AUS</h3>
          </div>
          <Badge className="absolute left-1 top-1 bg-red-500 text-primary">
            LIVE
          </Badge>
        </div>
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail8} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>BAN vs ENG</h3>
          </div>
          <Badge className="absolute left-1 top-1 bg-red-500 text-primary">
            LIVE
          </Badge>
        </div>
      </div>
    </div>
  )
}

function NavHighlightsChildren() {
  return (
    <div className="flex w-full flex-col md:w-[550px] lg:w-max  lg:max-w-[800px]">
      <div className="flex  items-center  gap-2 pt-4">
        <h3 className="scroll-m-20 pl-4 text-left text-xl font-semibold tracking-tight text-primary">
          Highlights
        </h3>

        <Highlighter />
      </div>
      <div className="flex flex-wrap justify-between gap-3 p-4 ">
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail1} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>#SRHvsCSK</h3>
          </div>
        </div>
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail2} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>#CSKvsRR</h3>
          </div>
        </div>
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail3} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>#BHEEMvsAlien</h3>
          </div>
        </div>
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail4} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>#RCBvsMI</h3>
          </div>
        </div>
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail5} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>#SRHvsCSK</h3>
          </div>
        </div>
        <div className="relative w-60 overflow-hidden rounded-sm">
          <Image src={thumbnail6} alt="thumbnail" />
          <div className="gradient absolute inset-0 flex items-end justify-center pb-2 text-primary ">
            <h3>#CSKvsRR</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavFixturesChildren() {
  return (
    <div className="flex w-full flex-col md:w-[550px] lg:w-max  lg:max-w-[800px]">
      <div className="flex  items-center gap-2 pt-4">
        <h3 className="scroll-m-20 pl-4 text-left text-xl font-semibold tracking-tight text-primary">
          Fixtures
        </h3>

        <Calendar />
      </div>
      <div className="flex flex-wrap gap-3 p-4 ">
        <Card className="w-80 overflow-hidden rounded-sm border-none">
          <div className="relative h-40">
            <Image
              src={banvsaus}
              alt="thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="gradient absolute inset-0 "></div>
          </div>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center gap-3">
                <div className="w-30">
                  <ReactCountryFlag countryCode="BD" /> <span>BAN</span>
                </div>
                <span>
                  <Swords />
                </span>
                <div className="w-30">
                  <ReactCountryFlag countryCode="PK" /> <span>PAK</span>
                </div>
              </div>
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              animi?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3 text-xl font-bold">
              <Clock />
              <span>12:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-xl font-bold">
              <CalendarDays />
              <span>1st AUG</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="col-span-2 w-[75%]">Watch Live</Button>
            <Button variant="secondary" className="col-span-1 bg-red-500">
              <BellPlus />{" "}
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-80 overflow-hidden rounded-sm border-none">
          <div className="relative h-40">
            <Image
              src={indvsaus}
              alt="thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="gradient absolute inset-0 "></div>
          </div>
          <CardHeader>
            <CardTitle>
              <div className="flex justify-center gap-3">
                <div className="w-30">
                  <ReactCountryFlag countryCode="IN" /> <span>IND</span>
                </div>
                <span>
                  <Swords />
                </span>
                <div className="w-30">
                  <ReactCountryFlag countryCode="AU" /> <span>AUS</span>
                </div>
              </div>
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              animi?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3 text-xl font-bold">
              <Clock />
              <span>12:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-xl font-bold">
              <CalendarDays />
              <span>1st AUG</span>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="col-span-2 w-[75%]">Watch Live</Button>
            <Button variant="secondary" className="col-span-1 bg-red-500">
              <BellPlus />{" "}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function NavScoreBoardChildren() {
  return (
    <div className="flex w-full flex-col md:w-[550px] lg:w-max  lg:max-w-[1000px]">
      <div className="flex min-w-[400px]  gap-2 pt-4">
        <h3 className="scroll-m-20 pl-4 text-left text-xl font-semibold tracking-tight text-primary">
          ScoreBoard
        </h3>

        <Grid />
      </div>
      <div className="flex flex-wrap gap-3 p-4 ">
        <Card className="w-[25rem] overflow-hidden rounded-sm border-none">
          <div className="relative h-20">
            <Image
              src={banvsaus}
              alt="thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="gradient absolute inset-0 "></div>
            <Badge className="absolute left-1 top-1 bg-red-500 text-primary">
              LIVE
            </Badge>
          </div>
          <CardHeader>
            <CardDescription className="text-center text-xs">
              Test 1 of 2 - End of Day 1
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between gap-3">
            <div className="w-[40%]">
              <div className="flex w-full  justify-between">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full items-center justify-between">
                    <ReactCountryFlag
                      svg={true}
                      className="h-full rounded-sm object-cover text-[4rem]"
                      countryCode="BD"
                      style={{
                        width: "auto",
                        height: "2rem",
                      }}
                    />{" "}
                    <div className="text-center">
                      <span> 14/0</span> <br />
                      <span className="text-sm text-muted-foreground">
                        (69)
                      </span>
                    </div>
                  </div>
                  <span className="ml-1 text-sm ">BAN </span>
                </div>
              </div>
            </div>
            <Separator orientation="vertical" className="h-20" />
            <div className="w-[40%]">
              <div className="flex w-full  justify-between">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-center">
                      <span> 14/0</span> <br />
                      <span className="text-sm text-muted-foreground">(4)</span>
                    </div>
                    <ReactCountryFlag
                      svg={true}
                      className="h-full rounded-sm object-cover text-[4rem]"
                      countryCode="AU"
                      style={{
                        width: "auto",
                        height: "2rem",
                      }}
                    />{" "}
                  </div>
                  <span className="mr-2 text-right text-sm">AUS </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <CardDescription className="text-md w-full text-center">
              Ban trail Aus by 55 runs
            </CardDescription>
          </CardFooter>
          {/* <CardFooter className="flex justify-between">
            <Button className="col-span-2 w-[75%]">Watch Live</Button>
            <Button variant="secondary" className="col-span-1 bg-red-500">
              <BellPlus />{" "}
            </Button>
          </CardFooter> */}
        </Card>
        <Card className="w-[25rem] overflow-hidden rounded-sm border-none">
          <div className="relative h-20">
            <Image
              src={indvsaus}
              alt="thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="gradient absolute inset-0 "></div>
          </div>
          <CardHeader>
            <CardDescription className="text-center text-xs">
              Test 1 of 2 - End of Day 1
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between gap-3">
            <div className="w-[40%]">
              <div className="flex w-full  justify-between">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full items-center justify-between">
                    <ReactCountryFlag
                      svg={true}
                      className="h-full rounded-sm object-cover text-[4rem]"
                      countryCode="IN"
                      style={{
                        width: "auto",
                        height: "2rem",
                      }}
                    />{" "}
                    <div className="text-center">
                      <span> 69/0</span> <br />
                      <span className="text-sm text-muted-foreground">
                        (69)
                      </span>
                    </div>
                  </div>
                  <span className="ml-1 text-sm ">IND </span>
                </div>
              </div>
            </div>
            <Separator orientation="vertical" className="h-20" />
            <div className="w-[40%]">
              <div className="flex w-full  justify-between">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-center">
                      <span> 19/0</span> <br />
                      <span className="text-sm text-muted-foreground">(4)</span>
                    </div>
                    <ReactCountryFlag
                      svg={true}
                      className="h-full rounded-sm object-cover text-[4rem]"
                      countryCode="AU"
                      style={{
                        width: "auto",
                        height: "2rem",
                      }}
                    />{" "}
                  </div>
                  <span className="mr-2 text-right text-sm">AUS </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <CardDescription className="text-md w-full text-center">
              IND trail Aus by 22 runs
            </CardDescription>
          </CardFooter>
          {/* <CardFooter className="flex justify-between">
            <Button className="col-span-2 w-[75%]">Watch Live</Button>
            <Button variant="secondary" className="col-span-1 bg-red-500">
              <BellPlus />{" "}
            </Button>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  )
}

function NavBuyChildren() {
  return (
    <div className="flex h-80 w-full items-center justify-center md:w-[550px]  lg:w-[800px]">
      <p className="text-primary ">
        Prices will arrive soon get ready to buy 🤑
      </p>
    </div>
  )
}
function NavNewsChildren() {
  return (
    <div className="flex h-80 w-full items-center justify-center md:w-[550px]  lg:w-[800px]">
      <p className="text-primary ">
        News will arrive soon get ready to read 🥰
      </p>
    </div>
  )
}

function CustomNavigationMenu() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {mainNav.map((item) => {
            if (!item.children)
              return (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <item.icon className="h-4" /> <span> {item.title}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )

            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>
                  <item.icon className="h-4" /> <span> {item.title}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <item.children />
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function CustomUserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-11 w-11 cursor-pointer">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="/login">
          <DropdownMenuItem>
            <LogOut className="mr-2 inline h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
