import React, { useState, useEffect } from 'react'

function FunctionComponent(props) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        //相当于componentDidMount、componentDidUpdate、componentWillUnmount集合
        console.log("useEffect");
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [])
    return (
        <div>
            <h3>FunctionComponent</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default FunctionComponent
