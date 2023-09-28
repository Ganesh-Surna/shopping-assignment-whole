import { useState } from "react";

export default function useFilter(){
    const [isExpanded, setIsExpanded]= useState(false);

    function handleToggle(){
        setIsExpanded((prev)=>!prev);
    }

    return {
        isExpanded,
        handleToggle,
    }
}