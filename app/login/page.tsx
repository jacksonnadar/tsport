import Image from "next/image"
import Link from "next/link"

import facebookLogo from "../../assets/facebook.svg"
import googleLogo from "../../assets/google.svg"
import loginimg from "../../assets/loginimg.jpg"
import logo from "../../assets/logo.svg"
// 1 - 15
import thumbnail1 from "../../assets/thumbnail1.jpg"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.jpg"
import thumbnail5 from "../../assets/thumbnail5.jpg"
import thumbnail6 from "../../assets/thumbnail6.jpg"
import thumbnail7 from "../../assets/thumbnail7.jpg"
import thumbnail8 from "../../assets/thumbnail8.jpg"
import thumbnail9 from "../../assets/thumbnail9.jpg"
import thumbnail10 from "../../assets/thumbnail10.jpg"
import thumbnail11 from "../../assets/thumbnail11.jpg"
import thumbnail13 from "../../assets/thumbnail13.png"
import thumbnail14 from "../../assets/thumbnail14.jpg"
import thumbnail15 from "../../assets/thumbnail15.jpg"
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Separator } from "../../components/ui/separator"

export default function IndexPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      <Image src={loginimg} alt="" className="object-cover w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-lg">
        <Card className="w-[60vw] overflow-hidden rounded-2xl">
          <div className="flex flex-grow">
            <div className="w-[40%] min-h-full  overflow-hidden relative">
              <div className="absolute gradientr-dark inset-0 z-10"></div>

              <div className="flex flex-col w-[200%] h-full justify-between ">
                <div className="flex gap-3 animate-back-and-forth">
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail1}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail2}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail3}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail4}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail5}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail6}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                </div>
                <div className="flex gap-3 animate-back-and-forth-reverse">
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail7}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail8}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail9}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail10}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail11}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail13}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                </div>
                <div className="flex gap-3 animate-back-and-forth">
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail14}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail15}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail11}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail2}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail3}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="group relative min-h-[10rem] w-[7rem] ">
                    <Image
                      src={thumbnail4}
                      alt="thumbnail"
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow p-14 py-20 ">
              <CardHeader className="p-0 pb-3">
                <Image src={logo} alt="logo" className="w-20 -mt-3 mb-2" />
                <CardTitle className="text-2xl font-medium mb-5 text-muted-foreground">
                  Login Or Sign Up To Continue
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col p-0">
                <div className="flex gap-5 w-full ">
                  <Input
                    className=" w-24 border-2 border-primary px-5 py-7 text-lg"
                    disabled
                    value="+88"
                  />
                  <Input
                    className=" border-2 w-auto border-muted-foreground flex-grow px-5 py-7 text-lg"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <CardDescription className="text-muted-foreground text-xs pt-3">
                  *By continuing you are agreeing to our Terms of Service and
                </CardDescription>
                <Separator className="my-10 w-[70%] mx-auto" />

                <div className="flex flex-col gap-5 justify-start">
                  <Button className="mx-auto bg-primary h-14 py-5 w-full rounded-lg text-lg">
                    <span>
                      <Image src={googleLogo} alt="" className="w-6 h-6" />
                    </span>
                    Google
                  </Button>
                  <Button className="w-full mx-auto bg-primary h-14  py-5 rounded-lg text-lg">
                    <span>
                      <Image src={facebookLogo} alt="" className="w-6 h-6" />
                    </span>
                    Facebook
                  </Button>
                  <CardDescription className="text-muted-foreground text-md pt-3 text-center">
                    Need help logging in?{" "}
                    <Link href="/">
                      <span className="text-primary">Click here</span>
                    </Link>
                  </CardDescription>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
