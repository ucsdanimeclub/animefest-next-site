import MyImage from "../myimage"


export default function PrizeImages({ prizes, ...otherProps }) {
    let { className, ...otherPropsWithoutClassName } = otherProps
    let classes = "mb-2 d-inline-flex flex-wrap justify-content-between"
    if (className) {
        classes = classes + " " + className
    }
    return (
        <>
            <div className={classes} {...otherPropsWithoutClassName}>
                {prizes.map((imageSource, index) => {
                    return (
                        <a key={index} href={imageSource} style={{ "display": "contents" }}>
                            <MyImage src={imageSource}
                                className="col-xs-6 col-sm-4 col-md-3 col-lg-2 m-2 border-stroke prize-image">
                            </MyImage>
                        </a>
                    )
                })}
            </div>
            <p className="text-center caption-text mb-0">(Actual designs may vary.)</p>
        </>
    )
}
