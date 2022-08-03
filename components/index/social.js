import MyImage from "../myimage"

export default function Social({data, height=40, gap=4, ...otherProps}) {
    let {className, ...otherPropsWithoutClassName} = otherProps
    let gapSpacer = "gap-" + gap
    let classes = "col-12 col-sm-12 d-inline-flex flex-wrap justify-content-center " + gapSpacer
    return (
        <div className={classes + " " + className} {...otherPropsWithoutClassName}>
            {data["socials"].map((social, index) => (
                <span key={index}>
                <a href={social["url"]}>
                    <MyImage src={social["icon"]} alt={social["name"]} height={height}/>
                </a>
                </span>
            ))}
        </div>
    )
}
