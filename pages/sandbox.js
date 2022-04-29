import {Container} from 'react-bootstrap'


export default function Sandbox() {
    return (
        <>
            <Container fluid className="p-5 section">
            </Container>

            <Container fluid className="p-4 mt-5 section">
                <div>
                    <iframe className="sheet-schedule w-75 d-block mx-auto"
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSh2gBYXSEV57p05RAVENMwqDHmJ5GFHTjgb0M9LOTAYrBbLrrwA5fMECz7R3F2qfpnRElr854rGZOG/pubhtml?widget=true&amp;headers=false"></iframe>
                </div>
            </Container>
        </>
    )
}
