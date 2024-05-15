import React, {useRef, useState} from 'react';

function TestUseRef() {
  const countRef = useRef(0);
  const [numberX, setNumberX] = useState(0)

  const handleButtonClick = () => {
    countRef.current += 1;
    console.log(countRef.current);

    // setNumberX(numberX + 1)
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Increment + {countRef.current}</button>
      <p>
        {numberX}
      </p>
    </div>
  );
};

export default TestUseRef