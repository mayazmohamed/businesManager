"use client";

import React, { useState } from "react";
import { Avatar, Switch, FormControlLabel, Grid } from "@mui/material";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar({
  dark,
  toggleDark,
}: {
  dark: boolean;
  toggleDark: () => void;
}) {
  const [avatar, setAvatar] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className=" w-full h-[6rem] flex items-center justify-between container mx-auto ">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="w-[3rem] h-[3rem]" />
        <h1 className="ml-2 text-2xl font-bold">Momayaz</h1>
      </div>
      <div className="flex items-center">
        <Avatar className="ml-2 cursor-pointer">MO</Avatar>
      </div>
    </div>
  );
}
