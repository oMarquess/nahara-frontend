"use client";

//import { Link } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Montserrat} from "next/font/google";
import {usePathname} from "next/navigation";


import {cn} from "@/lib/utils";
import { LayoutDashboard, MessageSquare, Settings, StethoscopeIcon, ViewIcon, WavesIcon } from "lucide-react";
import { FreeCounter } from "./free-counter";
import { boolean } from "zod";

const montserrat = Montserrat ({ weight: "600",
                                subsets: ["latin"] 
                            });

const routes = [
    {
       label: "Dashboard", 
       icon: LayoutDashboard,
       href: "/dashboard",
       color: "text-sky-500",
    },
    {
        label: "MedCon", 
        icon: StethoscopeIcon,
        href: "/conversation",
        color: "text-violet-500",
     },
     {
        label: "Vision", 
        icon: ViewIcon,
        href: "/conversationx",
        color: "text-emerald-500",
     },
     {
        label: "Sounds", 
        icon: WavesIcon,
        href: "/conversationxx",
        color: "text-orange-500",
     },
     {
        label: "Settings", 
        icon: Settings,
        href: "/settings",
        //color: "text-violet-500",
     },
];

interface SidebarProps {
    apiLimitCount: number;
};

const Sidebar = ({apiLimitCount = 0}:SidebarProps) => {
    const pathname = usePathname();
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full
        bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                        fill
                        alt='Logo'
                        src = "/logo.png"
                        />
                    </div>
                    <h1 className={cn ("text-2xl font-bold", montserrat.className)}>
                        nahara
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        , //dynamic color switching to indicate the active navbar
                        pathname === route.href ?
                         "text-white bg-white/10":
                        "text-zinc-400"
                        )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                            {route.label}
                            </div>


                        </Link>
                    ))}
                </div>

            </div>
            <FreeCounter apiLimitCount = {apiLimitCount}/>
        </div>
     );
}
 
export default Sidebar;