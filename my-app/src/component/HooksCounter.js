import React, { useState } from "react";

export default function HooksCounter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hooks {props.name}
            functional component with Hooks
            {count} times</h1>
            <button onClick={() => {
                setCount(count => count + 1)
            }}> +1 </button>
        </div>
    )
}