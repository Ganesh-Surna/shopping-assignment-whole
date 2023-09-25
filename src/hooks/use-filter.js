import { useState } from "react";

export default function useFilter(){
    const [isExpanded, setIsExpanded]= useState(true);

    function handleToggle(){
        setIsExpanded((prev)=>!prev);
    }

    return {
        isExpanded,
        handleToggle,
    }
}