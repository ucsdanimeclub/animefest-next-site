import MyImage from "../myimage"

const topRow = ["20260214_140318", "20260214_145714", "20260214_153245", "IMG_0011", "IMG_8926", "PXL_20250215_213655985"]
const bottomRow = ["20230218_182456", "20260214_113325", "20260214_121615", "20260214_132957", "20260214_142207", "20260214_143007"]

function Strip({photos, reverse}) {
    // Photos are listed twice so the strip can loop without a gap
    return (
        <div className="gallery-row">
            <div className={"gallery-strip" + (reverse ? " gallery-reverse" : "")}>
                {photos.concat(photos).map((photo, index) => (
                    <MyImage key={index} src={"images/home/gallery/" + photo + ".jpg"} alt="Photo from a past Animefest"/>
                ))}
            </div>
        </div>
    )
}

export default function Gallery() {
    return (
        <section className="gallery">
            <Strip photos={topRow}/>
            <Strip photos={bottomRow} reverse/>
        </section>
    )
}
