import React, { useEffect } from "react";

import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {

    const [enabled, setEnabled] = useLocalStorage(key,initialValue)
   

    
    useEffect(()=>{
        enabled ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
    },[enabled])
    return [enabled, setEnabled]

}