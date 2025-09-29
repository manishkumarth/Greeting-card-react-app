import {createContext, useState } from "react";

export const bgContext = createContext()

function BackgroundUpdate({ children }) {
    const [bgColor,setBgcolor]=useState("")
    const [bgImg,setBgImg]=useState("")
    const changeBgimage=()=>{

    }
    return (
        <bgContext.Provider value={{bgColor,setBgcolor,bgImg,setBgImg,changeBgimage}}>
            {children}
        </bgContext.Provider>
    )
}
export default BackgroundUpdate