import {useEffect, useState} from 'react'

const offers = ["Exhibitor Hall", "Performances", "Panels", "Manga Library", "Cosplay Masquerade", "Gameshows", "Drawings"]

export default function Offers() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setIndex((i) => (i + 1) % offers.length), 2000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="offers">
            <h2 className="offers-title">At Animefest, <span className="text-red">we have...</span></h2>
            {/* The key change replays the slide-in animation for each new item */}
            <p key={index} className="offers-item">{offers[index]}</p>
        </div>
    )
}
