import {useState, ChangeEvent} from "react";

export default function (initialValue: string | number) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {value, onChange}
}
