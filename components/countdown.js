import {useEffect, useState} from 'react'

const eventStart = new Date("2027-02-13T11:00:00").getTime()

function timeLeft() {
    const seconds = Math.max(0, Math.floor((eventStart - Date.now()) / 1000))
    return {
        days: Math.floor(seconds / 86400),
        hours: Math.floor(seconds / 3600) % 24,
        minutes: Math.floor(seconds / 60) % 60,
        seconds: seconds % 60,
    }
}

export default function Countdown() {
    // Starts empty so the server render matches the first client render
    const [time, setTime] = useState(null)

    useEffect(() => {
        setTime(timeLeft())
        const timer = setInterval(() => setTime(timeLeft()), 1000)
        return () => clearInterval(timer)
    }, [])

    if (time && Object.values(time).every((value) => value === 0)) {
        return <h3 className="countdown-done">Animefest 2027 has begun!</h3>
    }

    const units = ["days", "hours", "minutes", "seconds"]
    return (
        <div className="countdown">
            {units.map((unit) => (
                <div key={unit} className="countdown-unit">
                    <span className="countdown-number">{time ? String(time[unit]).padStart(2, "0") : "00"}</span>
                    <span className="countdown-label">{unit}</span>
                </div>
            ))}
        </div>
    )
}
