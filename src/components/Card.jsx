import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

export default function Card() {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".circle", {
        y:-10,
        opacity: 0
    })

    gsap.to(".circle", {
        scrollTrigger: {
            trigger: ".circle",
            // markers: true,
            toggleActions: "restart pause reverse pause"
        },
        y:0,
        opacity: 1,
        duration: 2
    })

    return (
        <div 
            className="Card"
        >
            <div className="Interest">
                <h1>Interest</h1>
                <p>I have interest on Science especially about Space, Technology, Sports, Game, Music, and Anime.</p>
                <div 
                    className="Anim-Wrapper">
                    <div 
                        className="circle one"
                    >-</div>
                    <div 
                        className="circle two"
                    >o</div>
                    <div 
                        className="circle three"
                    >x</div>
                </div>
            </div>
        </div>
    )
}