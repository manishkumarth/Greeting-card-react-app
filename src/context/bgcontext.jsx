import {createContext, useEffect, useState } from "react";

export const bgContext = createContext()

function BackgroundUpdate({ children }) {
    const [bgColor,setBgcolor]=useState("")
    const [bgImg,setBgImg]=useState("")
    const changeBgimage=()=>{

    }
    useEffect(()=>{
        console.log("imagePath_inside context",bgImg)

    })
    return (
        <bgContext.Provider value={{bgColor,setBgcolor,bgImg,setBgImg,changeBgimage}}>
            {children}
        </bgContext.Provider>
    )
}
export default BackgroundUpdate