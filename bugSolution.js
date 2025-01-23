```javascript
//File: bugSolution.js
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
    </div>
  );
}

export default MyComponent;
```