import React from 'react'
import CountUp from "react-countup";
import Link from "next/link";

const Counter = ({ end, title, link }) => {
    return (
        <div>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={end} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                <Link href={link} target="_blank">
                    {title}
                </Link>
            </div>
        </div>
    )
}
export default Counter