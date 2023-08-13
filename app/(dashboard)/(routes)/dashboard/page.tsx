//import Image from 'next/image'
// import {Button} from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";

"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import {cn} from "@/lib/utils";
import { ArrowRight, MessageSquare } from "lucide-react";

const tools = [
  {
    label : "Nahara-Med",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label : "Nahara-Med",
    icon: MessageSquare,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/conversation"
  },
  //You may add more products
]

const DashboardPage = () => {
  const router = useRouter();
  return (
   <div>
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Welcome to Nahara
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Empowering Healthcare through Precision AI.
      </p>
    </div>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {
        tools.map((tool)=> (
          <Card 
          onClick={()=> router.push(tool.href)}
          key={tool.href}
          className="p-4 border-black/5 flex items-center
          justify-between hover:shadow-md transition
          cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color )} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>

          </Card>

        )
        )
      }

    </div>
    </div>
    
    )
}
export default DashboardPage;