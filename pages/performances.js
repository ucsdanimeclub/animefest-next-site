import {Container} from 'react-bootstrap' //Ratio for the YouTube embed


export default function Performances() {
    return (
        <>
            <Container fluid className="p-5 text-center jumbo-display">
                <h1 className="display-4 mb-0">PERFORMANCES</h1>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">ABOUT</h4>
                <p>Performances will be held in the East Ballroom. More information coming soon!</p>
            </Container>

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">FEATURING SUPER TONIC</h4>*/}
            {/*    <p className="text-left caption-text mb-4">3:00 PM - 4:00 PM: Performance</p>*/}
            {/*    <p className="mb-4">A San Diego based anime and video game cover band composed of UCSD alumni, with a*/}
            {/*        set of songs sure to deliver a huge dose of excitement. Check out their last Animefest performance*/}
            {/*        here:</p>*/}
            {/*    <div className="video-player mx-auto">*/}
            {/*        <Ratio aspectRatio="16x9">*/}
            {/*            <iframe className="border-stroke"*/}
            {/*                    src="https://www.youtube-nocookie.com/embed/Ul4fmEYF7Bk"*/}
            {/*                    title="YouTube video player" frameBorder="0"*/}
            {/*                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*                    allowFullScreen={true}/>*/}
            {/*        </Ratio>*/}
            {/*    </div>*/}
            {/*</Container>*/}
        </>
    )
}
