import React, { useState, useEffect } from 'react'

function LikeCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count
    }, [count]);
  return (
    <div>
        <button onClick={
            () => setCount(count => count+1)}
        >{count}</button>
    </div>
  )
}

export default LikeCounter