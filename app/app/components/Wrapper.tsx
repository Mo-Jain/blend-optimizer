"use client"

import React, { useState } from "react";
import SideBar from "./SideBar";
import { MyThemeContextProvider } from "../context/themeContext";
import { RecoilRoot, useRecoilState } from "recoil";

export function Wrapper({children}: {
    children: React.ReactNode
}) {

    return(
        <MyThemeContextProvider>
            <RecoilRoot>
            <div className="flex w-full">
                <SideBar/>
                <div className="w-full">
                {children}
                </div>
            </div>
            </RecoilRoot>
        </MyThemeContextProvider>
    )
}


