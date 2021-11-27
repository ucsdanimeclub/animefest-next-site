import { useRouter } from "next/dist/client/router"


export default function BackgroundImage({ children, src, ...otherProps }) {
  const router = useRouter()
  const myBackgroundStyle = {
    backgroundImage: `url('${router.basePath}/${src}') !important`
  }
  return (
    <div style={myBackgroundStyle} {...otherProps}>
      {children}
    </div>
  )
}
