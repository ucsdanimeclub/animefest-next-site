import {Table, Col, Row} from "react-bootstrap"

export function Exhibitor({data}) {
    // takes a person object with "name" and optional "link" properties
    if (data["link"]) {
        return (
            <a href={data["link"]}>{data["name"]}</a>
        )
    } else {
        return (
            <>
                {data["name"]}
            </>
        )
    }
}

export default function ExhibitorTable({data, ...otherProps}) {
    return (
        <Row {...otherProps}>
            <Col xs={0} md={1} lg={2}>
            </Col>
            <Col xs={12} md={10} lg={8}>
                <Table striped bordered hover responsive variant="dark" className="exhibitor-table border-stroke">
                    <thead>
                    <tr>
                        <th width={"75%"}>Name</th>
                        <th>Table</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((table, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {table["people"].map((person, index) => (
                                        <span key={index}>
                                            <Exhibitor data={person} />
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
            </Col>
            <Col xs={0} md={1} lg={2}>
            </Col>
        </Row>
    )
}
