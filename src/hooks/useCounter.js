import { useState } from 'react';

export const useCounter = (add = 100) => {

    const [count, setCount] = useState(add)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }
    return [count,inc,dec ]

}