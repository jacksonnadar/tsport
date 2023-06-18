"use client"

import { useEffect, useRef, useState } from "react"
import Image, { StaticImageData } from "next/image"
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
import thumbnail9 from "../assets/thumbnail9.jpg"
import thumbnail10 from "../assets/thumbnail10.jpg"
import thumbnail11 from "../assets/thumbnail11.jpg"
import thumbnail13 from "../assets/thumbnail13.png"
import thumbnail14 from "../assets/thumbnail14.jpg"
import thumbnail15 from "../assets/thumbnail15.jpg"
import { SiteHeader } from "../components/site-header"
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

interface RowData {
  image: StaticImageData
  title: string
  desc: string
  id: number
}
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
    }, 3000)
  }, [])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (video.current) video.current.muted = !isMuted
  }

  const onVideoEnded = (e: any) => {
    console.log("ended")

    setIsVideoLoaded(false)
  }

  const rowDataHighlights: RowData[] = [
    {
      id: 1,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail1,
    },
    {
      id: 2,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail2,
    },
    {
      id: 3,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail3,
    },
    {
      id: 4,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail4,
    },
    {
      id: 5,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail5,
    },
    {
      id: 6,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail6,
    },
    {
      id: 7,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008. They finished third in the group, winning 8 out of 14 games.",
      image: thumbnail7,
    },
  ]

  const rowDataUpcoming: RowData[] = [
    {
      id: 8,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail8,
    },
    {
      id: 9,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail9,
    },
    {
      id: 10,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail10,
    },
    {
      id: 11,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail11,
    },
    {
      id: 12,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail13,
    },
    {
      id: 13,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail14,
    },
    {
      id: 14,
      title: "CSK vs GT",
      desc: "Chennai made his first final appearance in the very first season of 2008.",
      image: thumbnail15,
    },
  ]

  return (
    <>
      <SiteHeader />

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
                    <p className="pt-2 text-start text-5xl font-bold">
                      #CSKvsGT
                    </p>{" "}
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
                    className="flex  justify-between text-xs"
                    style={{ marginTop: ".8rem", marginBottom: ".8rem" }}
                  >
                    <div className="flex items-center gap-1">
                      <span>
                        <Eye className="text-xs" />
                      </span>
                      <p className="text-gray-300 ">1.2k views</p>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="h-[22px] bg-primary"
                    />
                    <div className="flex items-center gap-1">
                      <span>
                        <Clock className="text-xs" />
                      </span>
                      <p className="text-gray-300 ">2 hours ago</p>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="h-[22px] bg-primary"
                    />
                    <div className="flex items-center gap-1">
                      <span>
                        <Swords className="text-xs" />
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

        <div className="relative z-10 flex w-screen flex-col gap-[5.5rem] bottom-64">
          <CustomCardRow
            data={rowDataHighlights}
            isFirst
            heading="Highlights"
          />
          <CustomCardRow data={rowDataUpcoming} heading="Upcoming" />
          <CustomCardRow data={rowDataHighlights} heading="Football" />
          <CustomCardRow
            data={rowDataHighlights}
            orientation="vertical"
            heading="Top 7 Bengali Movies"
          />
          <CustomCardRow
            data={rowDataUpcoming}
            orientation="vertical"
            heading="Because You Watched Movies"
          />
          {/* <div className="flex w-screen flex-col gap-2 -mt-36  overflow-x-hidden px-10 hover:z-10">
          <h3 className="relative z-[1] text-xl relative top-24 font-bold text-primary">
            Highlights
          </h3>
          <div className="z-[2] flex  min-h-[8rem] w-full gap-3 py-24 overflow-hidden  ">
            <CustomCard image={thumbnail1} />
            <CustomCard image={thumbnail2} />
            <CustomCard image={thumbnail3} />
            <CustomCard image={thumbnail4} />
            <CustomCard image={thumbnail5} />
            <CustomCard image={thumbnail6} />
            <CustomCard image={thumbnail7} />
          </div>
        </div> */}
          {/* <div className="mt-[-26rem] flex w-screen flex-col gap-2 overflow-x-hidden px-10 ">
          <h3 className="relative top-[3rem] z-[1] text-xl font-bold text-primary">
            Something More
          </h3>
          <div className="z-[2]  flex  min-h-[8rem] w-full gap-3 overflow-hidden  ">
            <CustomCard image={thumbnail8} />
            <CustomCard image={thumbnail9} />
            <CustomCard image={thumbnail10} />
            <CustomCard image={thumbnail11} />
            <CustomCard image={thumbnail15} />
            <CustomCard image={thumbnail13} />
            <CustomCard image={thumbnail14} />
          </div>
        </div> */}
          {/* <div className="-mt-64 flex w-screen flex-col gap-2 overflow-x-hidden px-10 ">
          <h3 className="relative top-[3rem] z-[1] text-xl font-bold text-primary">
            Whatever
          </h3>
          <div className="z-[2] -mt-80 flex w-full min-h-[8rem] w-full gap-3 overflow-hidden py-96 ">
            <CustomCard image={thumbnail1} />
            <CustomCard image={thumbnail2} />
            <CustomCard image={thumbnail3} />
            <CustomCard image={thumbnail4} />
            <CustomCard image={thumbnail5} />
            <CustomCard image={thumbnail6} />
            <CustomCard image={thumbnail7} />
          </div>
        </div> */}
          {/* <div className="-mt-64 flex w-screen flex-col gap-2 overflow-x-hidden px-10 ">
          <h3 className="relative top-[3rem] z-[1] text-xl font-bold text-primary">
            Bengali Movies
          </h3>
          <div className="z-[2] -mt-80 flex  h-96 w-full gap-5 overflow-hidden py-96 ">
            <CustomCard orientation="vertical" image={thumbnail1} />
            <CustomCard orientation="vertical" image={thumbnail2} />
            <CustomCard orientation="vertical" image={thumbnail3} />
            <CustomCard orientation="vertical" image={thumbnail4} />
            <CustomCard orientation="vertical" image={thumbnail5} />
            <CustomCard orientation="vertical" image={thumbnail6} />
            <CustomCard orientation="vertical" image={thumbnail7} />
          </div>
        </div> */}
          {/* <div className="-mt-44 flex w-screen flex-col gap-2 overflow-x-hidden px-10 ">
          <h3 className="relative top-[3rem] z-[1] text-xl font-bold text-primary">
            Hindi Movies
          </h3>
          <div className="z-[2] -mt-80 flex  h-96 w-full gap-5 overflow-hidden py-96 ">
            <CustomCard orientation="vertical" image={thumbnail8} />
            <CustomCard orientation="vertical" image={thumbnail9} />
            <CustomCard orientation="vertical" image={thumbnail10} />
            <CustomCard orientation="vertical" image={thumbnail11} />
            <CustomCard orientation="vertical" image={thumbnail15} />
            <CustomCard orientation="vertical" image={thumbnail13} />
            <CustomCard orientation="vertical" image={thumbnail14} />
            <CustomCard orientation="vertical" image={thumbnail1} />
          </div>
        </div> */}
          {/* <div className="-mt-44 flex w-screen flex-col gap-2 overflow-x-hidden px-10 ">
          <h3 className="relative top-[3rem] z-[1] text-xl font-bold text-primary">
            New Arrivals
          </h3>
          <div className="z-[2] -mt-80 flex  h-96 w-full gap-3 overflow-hidden py-96 ">
            <CustomCard image={thumbnail1} />
            <CustomCard image={thumbnail2} />
            <CustomCard image={thumbnail3} />
            <CustomCard image={thumbnail4} />
            <CustomCard image={thumbnail5} />
            <CustomCard image={thumbnail6} />
            <CustomCard image={thumbnail7} />
          </div>
        </div> */}
        </div>
      </ScrollArea>
    </>
  )
}

function CustomCardRow({
  orientation = "horizontal",
  data,
  heading,
  isFirst = false,
}: {
  orientation?: string
  heading: string
  data: RowData[]
  isFirst?: boolean
}) {
  return (
    <div
      className={`${
        !isFirst ? "-mt-44" : ""
      } relative z-0 flex w-screen  flex-col gap-2 overflow-x-hidden px-10 hover:z-10`}
    >
      <h3 className="absolute top-12 text-xl font-bold text-primary">
        {heading}
      </h3>

      <div className="z-[2] flex  min-h-[8rem] w-full gap-3 overflow-hidden py-[5.2rem]  ">
        {data.map((item) => (
          <CustomCard
            key={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            orientation={orientation}
          />
        ))}
      </div>
    </div>
  )
}

function CustomCard({
  image,
  orientation = "horizontal",
  title,
  desc,
}: {
  image: StaticImageData
  orientation?: string
  title: string
  desc: string
}) {
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
    <div
      className={`group relative ${
        orientation === "vertical" ? "min-h-[14rem] w-44" : "h-32 min-w-[14rem]"
      } overflow-visible hover:z-10`}
    >
      <Image
        src={image}
        alt="thumbnail"
        className="h-full w-full rounded-sm object-cover"
      />

      {orientation === "horizontal" && (
        <Card
          onMouseEnter={onMouseOver}
          onMouseLeave={onMouseLeave}
          className="absolute left-[50%] top-[50%] flex h-[258%] w-[130%]  translate-x-[-50%] translate-y-[-50%] scale-[.6] items-center justify-center overflow-hidden rounded-lg bg-background/60 pb-3 opacity-0 backdrop-blur-lg transition-all duration-500 group-hover:scale-90 group-hover:opacity-100"
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
                  src={image}
                  alt="img"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <CardHeader className="px-4 py-0">
              <CardTitle className="text-2xl font-bold text-primary">
                {title}
                <Badge className="text-md h-4 px-3 text-sm my-auto hover:bg-primary cursor-pointer ">
                  Cricket
                </Badge>
              </CardTitle>
              <CardDescription className="line-clamp-2 max-h-12 w-full overflow-hidden  text-sm">
                {desc}
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
      )}
    </div>
  )
}
