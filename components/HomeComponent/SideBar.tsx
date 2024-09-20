'use client'
import { FaBars } from "react-icons/fa";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import { LinkComponent } from "./LinkComponent";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <FaBars size={26} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black">
        <div className="space-y-3">
          <SheetHeader>
            <SheetTitle className="text-white ">
              <div className=" ">
                <Image
                  src="/log.webp" // Add the path to your logo
                  alt="Site Logo"
                  width={80}
                  height={50}
                  priority
                  className="rounded-full h-14 w-14 md:w-18 md:h-18"
                />
              </div>
            </SheetTitle>
            <SheetDescription className="sr-only">
              {`Make changes to your profile here. Click save when you're done.`}
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-y-5">
            <LinkComponent />
          </div>
          <div className="flex gap-4 text-3xl">
            <SocialMedia />
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
