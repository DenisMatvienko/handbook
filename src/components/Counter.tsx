import React, { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incr = () => {
        setCount((currentCount) => currentCount + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.button__add} onClick={incr}>ADD</button>
        </div>
    );
};

export default Counter;