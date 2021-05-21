import React from 'react'
import './Blob.css'

export default props =>
    <div className="loading_cont">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="loader">
        <defs>
            <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <linearGradient id="MyGradient">
                <stop offset="5%"  stop-color="#40204c"/>
                <stop offset="40%" stop-color="#a3225c"/>
                <stop offset="100%" stop-color="#e24926"/>
            </linearGradient>
        </defs>
        <mask id="maska">
            <g className="blobs">
            <circle className="blob" cx="440" cy="250" r="30"  transform="rotate(0) translate(0, 0) rotate(0)"/>
            <circle className="blob" cx="500" cy="320" r="70"  transform="rotate(0) translate(0, 0) rotate(0)"/>
            <circle className="blob" cx="300" cy="390" r="40"  transform="rotate(0) translate(0, 0) rotate(0)"/>
            <circle className="blob" cx="380" cy="390" r="80"  transform="rotate(0) translate(0, 0) rotate(0)"/>
            <circle className="blob" cx="470" cy="450" r="20"  transform="rotate(0) translate(0, 0) rotate(0)"/>
            </g>
        </mask>
        <rect x="200" y="200"  mask="url(#maska)" fill="url(#MyGradient)" width="400" height="400"/>
    </svg>  
    </div>