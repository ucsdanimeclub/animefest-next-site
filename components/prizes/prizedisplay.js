import {Tab, Tabs} from "react-bootstrap"
import PrizeImages from "./prizeimages"


export default function PrizeDisplay({data, pools, ...otherProps}) {
    let prizesPerLocation = {}
    pools.forEach((pool) => {
        prizesPerLocation[pool] = data.filter((prize) => prize["pool"] === pool).map((prize) => prize["image"])
    })
    return (
        <Tabs id="prizes" {...otherProps}>
            {Object.keys(prizesPerLocation).map((pool, index) => {
                return (
                    <Tab eventKey={pool} title={pool} key={index}>
                        <PrizeImages prizes={prizesPerLocation[pool]} />
                    </Tab>
                )
            })}
        </Tabs>
    )
}
