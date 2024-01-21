import React from 'react'

export const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
            ></video>
            <source src="/blackhole.webm" type="video/webm" />

        </div>
    )
}