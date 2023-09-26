import { useState } from "react";

export default function useCheck(state){
    const [field, setField] = useState(state);

    function handleFieldCheckChange(event) {
        const { name, checked } = event.target;
    
        setField((prev) => {
          return {
            ...prev,
            [name]: checked,
          };
        });
      }

      return {
        field,
        handleFieldCheckChange,
      }
}