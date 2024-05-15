import React, { useMemo, useState, useEffect } from 'react';


function TestUseMemo () {

    const [a, setA] = useState(5);
    const [b, setB] = useState(10);
    const result = useMemo(() => {
        console.log('useMemo Computation performed');
        return a + b;
    }, [a, b]);

    useEffect(() => {
        console.log('useEffect Computation performed - Result' + (a + b));
    }, [a, b]);

    return (
        <div>
            <p>Result useMemo: {result}</p>
            <p>a: {a}</p>
            <p>b: {b}</p>
            <p>
                <button onClick={() => setA(a + 1)}>Increment A</button>
            </p>
            <p>
                <button onClick={() => setB(b + 1)}>Increment B</button>
            </p>
        </div>
    );
};

export default TestUseMemo