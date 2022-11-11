import {Container} from 'react-bootstrap' //Ratio for the YouTube embed


export default function Performances() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">PERFORMANCES</h1>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                {/*<p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>*/}
                <p>More information coming soon!</p>
                {/*<p className="mb-4">Sample:</p>*/}
                {/*<div className="video-player mx-auto">*/}
                {/*    <Ratio aspectRatio="16x9">*/}
                {/*        <iframe className="border-stroke"*/}
                {/*                src="https://www.youtube-nocookie.com/embed/dXodViGW8c8"*/}
                {/*                title="YouTube video player"*/}
                {/*                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*                allowFullScreen={true} />*/}
                {/*    </Ratio>*/}
                {/*</div>*/}
            </Container>
        </>
    )
}
