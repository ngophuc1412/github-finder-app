import React, { useCallback, useState } from 'react';

function TestUseCallback() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        console.log("Zo Increment 1 " + count)

        setCount(count + 1);

        console.log("Zo Increment 2 " + count)
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </p>
        </div>
    );
};

export default TestUseCallback