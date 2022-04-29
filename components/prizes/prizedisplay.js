import {Tab, Tabs} from "react-bootstrap";
import Prizes from "../../data/prizes.json"
import MyImage from "../myimage"


export default function PrizeDisplay({pools, ...otherProps}) {
    // let {className, ...otherPropsWithoutClassName} = otherProps
    // let classes = "carousel border-stroke caption-text glow-text"
    // if (centered) {
    //   classes = classes + " mx-auto"
    // }
    // if (className) {
    //   classes = classes + " " + className
    // }
    let prizesPerLocation = {}
    pools.forEach((pool) => {
        prizesPerLocation[pool] = Prizes["prizes"].filter((prize) => prize["pool"] === pool).map((prize) => prize["image"])
    })
    return (
        <Tabs id="prizes" {...otherProps}>
            {Object.keys(prizesPerLocation).map((pool, index) => {
                return (
                    <Tab eventKey={pool} title={pool} key={index}>
                        <div className="p-2 d-inline-flex flex-wrap raffle-display">
                            {prizesPerLocation[pool].map((imageSource, index) => {
                                return (
                                    <MyImage key={index} src={imageSource}
                                             className="col-xs-6 col-sm-4 col-md-3 col-lg-2 m-2 border-stroke prize-image">
                                    </MyImage>
                                )
                            })}
                        </div>
                    </Tab>
                )
            })}
        </Tabs>
    )
}
