import {Table, Col, Row} from "react-bootstrap"


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
                        {/*<th>Table</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((exhibitor, index) => (
                        <tr key={index}>
                            <td>
                                {exhibitor['name'].map((name, index) => (
                                        <a href={exhibitor['link'][index]}>{name + ' '}</a>
                                ))}
                            </td>
                            {/*<td>*/}
                            {/*    /!*table assignment here*!/*/}
                            {/*</td>*/}
                        </tr>
                    ))}
                    <tr>
                        <td>Test row</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            <Col xs={0} md={1} lg={2}>
            </Col>
        </Row>
    )
}
