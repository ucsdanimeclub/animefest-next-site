import { Table } from "react-bootstrap"

function TimeConvert(time) {
    // time in the 24-hr format of "HH:MM"
    // lead times with a 0 if needed (e.g. 08:00)
    let hours = Number(time.slice(0,2))
    const minutes = time.slice(-2)
    let meridian = ""
    if (hours < 12) {
        meridian = "AM"
    }
    else {
        meridian = "PM"
    }
    hours = hours % 12
    if (hours === 0) {
        hours = 12
    }
    return hours + ":" + minutes + " " + meridian
}

export default function EventTable({ data, location = "", ...otherProps }) {
    let {className, ...otherPropsWithoutClassName} = otherProps
    let classes = "border-stroke"
    if (className) {
      classes = classes + " " + className
    }

    let events = data
    if (location !== "") {
        events = events.filter((e) => e["location"] === location)
    }
    // sort events by time
    const events_sorted = events.sort((e1, e2) => e1["start"].localeCompare(e2["start"]))

    return (
        <Table striped bordered hover responsive variant="dark" className={classes} {...otherPropsWithoutClassName}>
            <thead>
                <tr>
                    <th width={"40%"}>Time</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
                {events_sorted.map((event, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {TimeConvert(event["start"]) + ' - ' + TimeConvert(event["end"])}
                            </td>
                            <td>
                                {event["topic"]}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
