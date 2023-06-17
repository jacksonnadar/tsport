"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  Eye,
  Heart,
  Play,
  PlayCircle,
  Share,
  Share2,
  Speaker,
  Swords,
  Volume,
  Volume2,
  VolumeX,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"

import image from "../assets/GTvsCSK.jpeg"
import ipllogo from "../assets/ipllogo.jpg"
import thumbnail1 from "../assets/thumbnail1.jpg"
import thumbnail2 from "../assets/thumbnail2.png"
import thumbnail3 from "../assets/thumbnail3.png"
import thumbnail4 from "../assets/thumbnail4.jpg"
import thumbnail5 from "../assets/thumbnail5.jpg"
import thumbnail6 from "../assets/thumbnail6.jpg"
import thumbnail7 from "../assets/thumbnail7.jpg"
import thumbnail8 from "../assets/thumbnail8.jpg"
import { Badge } from "../components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { ScrollArea } from "../components/ui/scroll-area"
import { Separator } from "../components/ui/separator"

export default function IndexPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const video = useRef<HTMLVideoElement>(null)
  const onVideoLoaded = (e: any) => {
    console.log("loaded")
  }
  console.log("hello")

  useEffect(() => {
    console.log("use")

    setTimeout(() => {
      video.current?.play()
      setIsVideoLoaded(true)
    }, 5000)
  }, [])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (video.current?.muted) video.current.muted = !isMuted
  }

  const onVideoEnded = (e: any) => {
    console.log("ended")

    setIsVideoLoaded(false)
  }
  return (
    <ScrollArea>
      <div className="z-[0] relative h-screen w-full">
        <video
          ref={video}
          src="https://storage.googleapis.com/casparcg-test/video.mp4"
          onEnded={onVideoEnded}
          onLoad={onVideoLoaded}
          className="absolute inset-0 h-full w-full object-cover"
          muted
        />
        <div
          className={` absolute inset-0 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000 ease-in-out`}
        >
          <Image
            src={image}
            alt="img"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="gradient-dark absolute inset-0"></div>
        <div className="absolute flex h-full w-full items-center justify-start p-10">
          <div className="flex w-full items-end  justify-between">
            <Card
              className={`h-[60%] w-[25%]  border-none bg-background/0 shadow-none ${
                isVideoLoaded ? "opacity-75" : "opacity-100"
              } transition-opacity duration-500 ease-in-out hover:opacity-100`}
            >
              <div className="flex justify-start pt-5 ">
                <Image
                  src={ipllogo}
                  alt="logo"
                  className="w-52 rounded-lg object-cover"
                />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="flex gap-3 items-center">
                  <p className="pt-2 text-start text-5xl font-bold">#CSKvsGT</p>{" "}
                  <Badge className="text-md h-8 px-5 bg-red-500 text-primary">
                    LIVE
                  </Badge>
                </CardTitle>
                <CardDescription className="pt-2 text-md text-primary">
                  Chennai made his first final appearance in the very first
                  season of 2008. They finished third in the group, winning 8
                  out of 14 games.
                </CardDescription>
                {/* <Separator className="w-full bg-primary" /> */}
                <div
                  className="flex gap-3 "
                  style={{ marginTop: ".8rem", marginBottom: ".8rem" }}
                >
                  <Button className="rounded-md w-52">
                    <span>
                      <Play />
                    </span>{" "}
                    Watch now
                  </Button>
                  <Button
                    className="rounded-md border-2 border-primary font-bold w-40"
                    variant="outline"
                  >
                    <span>
                      <Share2 />
                    </span>{" "}
                    Share
                  </Button>
                </div>
                <Separator className="w-full bg-primary mb-2" />
                <div
                  className="flex  justify-between"
                  style={{ marginTop: ".8rem", marginBottom: ".8rem" }}
                >
                  <div className="flex gap-1">
                    <span>
                      <Eye />
                    </span>
                    <p className="text-gray-300 ">1.2k views</p>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-[22px] bg-primary"
                  />
                  <div className="flex gap-1">
                    <span>
                      <Clock />
                    </span>
                    <p className="text-gray-300 ">2 hours ago</p>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-[22px] bg-primary"
                  />
                  <div className="flex gap-1">
                    <span>
                      <Swords />
                    </span>
                    <p className="text-gray-300 ">Cricket</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Button
              className="h-16 w-16 rounded-full border-primary"
              variant="outline"
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX /> : <Volume2 />}
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-56 flex w-screen flex-col gap-2">
        <div className="flex w-screen flex-col gap-2 overflow-x-hidden px-10">
          <h3 className="relative top-[3rem] z-[1] text-xl font-bold text-primary">
            Highlights
          </h3>
          <div className="z-[2] -mt-80 flex  h-96 w-full gap-3 overflow-hidden py-96 ">
            <div className="h-32 min-w-[14rem]">
              <Image
                src={thumbnail1}
                alt="thumbnail"
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
            <CustomCard />
            <div className="h-32 min-w-[14rem]">
              <Image
                src={thumbnail3}
                alt="thumbnail"
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
            <div className="h-32 min-w-[14rem]">
              <Image
                src={thumbnail4}
                alt="thumbnail"
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
            <div className="h-32 min-w-[14rem]">
              <Image
                src={thumbnail5}
                alt="thumbnail"
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
            <CustomCard />
            <div className="h-32 min-w-[14rem]">
              <Image
                src={thumbnail7}
                alt="thumbnail"
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="h-96"></footer>
    </ScrollArea>
  )
}

function CustomCard() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  const onVideoEnded = (e: any) => {
    console.log("ended")

    setIsVideoLoaded(false)
  }

  const onMouseOver = () => {
    setTimeout(() => {
      video.current?.play()
      setIsVideoLoaded(true)
    }, 500)
  }

  const onMouseLeave = () => {
    video.current?.pause()
    setIsVideoLoaded(false)
  }

  return (
    <div className="group relative h-32 min-w-[14rem]  overflow-visible">
      <Image
        src={thumbnail2}
        alt="thumbnail"
        className="h-full w-full rounded-sm object-cover"
      />

      <Card
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseLeave}
        className="absolute left-[50%] top-[50%] flex h-[258%] w-[130%]  translate-x-[-50%] translate-y-[-50%] scale-[.8] items-center justify-center overflow-hidden rounded-lg bg-background/70 pb-3 opacity-0 backdrop-blur-lg transition-all duration-300  group-hover:scale-100 group-hover:opacity-100 "
      >
        <div className="flex w-full flex-col justify-start gap-3">
          <div className="relative h-44 w-full">
            <video
              ref={video}
              src="https://storage.googleapis.com/casparcg-test/video.mp4"
              onEnded={onVideoEnded}
              className="absolute inset-0 h-full w-full object-cover"
              muted
            />
            <div
              className={` absolute inset-0 ${
                isVideoLoaded ? "opacity-0" : "opacity-100"
              } transition-opacity duration-1000 ease-in-out`}
            >
              <Image
                src={thumbnail2}
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <CardHeader className="px-4 py-0">
            <CardTitle className="text-2xl font-bold text-primary">
              #CSKvsGT{" "}
              <Badge className="text-md h-4 px-3 text-sm my-auto hover:bg-primary cursor-pointer ">
                Cricket
              </Badge>
            </CardTitle>
            <CardDescription className="text-sm ">
              Chennai made his first final appearance in the very first of 2008.
            </CardDescription>
          </CardHeader>
          <CardFooter className="px-5 py-0">
            <div className="flex w-full justify-between">
              <Button className="w-[73%] rounded-md">
                <span>
                  <Play />
                </span>{" "}
                Watch now
              </Button>
              <Button
                className="w-max rounded-md border-2 border-primary font-bold"
                variant="outline"
              >
                <span>
                  <Heart />
                </span>
              </Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}
