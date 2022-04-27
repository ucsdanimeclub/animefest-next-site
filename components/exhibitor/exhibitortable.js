import { Table } from "react-bootstrap"
import { useState } from "react";

export function Exhibitor({ data, highlighted }) {
    // takes a person object with "name" and optional "link" properties
    let styles = {}
    if (highlighted) {
        styles["color"] = "gold"
    }
    if (data["link"]) {

        return (
            <a href={data["link"]} style={styles}>{data["name"]}</a>
        )
    } else {
        return (
            <span style={styles}>
                {data["name"]}
            </span>
        )
    }
}

export default function ExhibitorTable({ data, ...otherProps }) {
    let [text, setText] = useState("")
    const onSearchChange = (e) => {
        setText(e.target.value)
    }
    const inSearch = (person) => person["name"].toLowerCase().includes(text.toLowerCase())
    return (
        <div {...otherProps}>
            <input type="search" placeholder="Search name..." value={text}
                className="mb-1 w-75 bg-dark text-white border-stroke" onChange={onSearchChange} />

            <Table striped bordered hover responsive variant="dark" className="border-stroke" >
                <thead>
                    <tr>
                        <th width={"75%"}>Name</th>
                        <th>Table</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((table) =>
                        table["people"].some(inSearch)
                    ).map((table, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {table["people"].map((person, index) => (
                                        <span key={index}>
                                            <Exhibitor data={person} highlighted={inSearch(person) && text !== ""} />
                                            {index < table["people"].length - 1 && table["people"].length > 2 && ','}
                                            {index < table["people"].length - 1 && ' '}
                                            <i>
                                                {index === table["people"].length - 2 && 'and '}
                                            </i>
                                        </span>
                                    ))}
                                </td>
                                <td>
                                    {table["id"]}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
