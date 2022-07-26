import React, {useState} from "react";

export default function useToggle(defautValue) {
    const [value, setValue] = useState(defautValue)

    function toggleValue() {
        setValue(prevVal => !prevVal)
    }
    return [value, toggleValue]
}