import { useRouter } from "next/dist/client/router"


export default function MyImage({ children, src, ...otherProps }) {
  const router = useRouter()
  return (
    <img src={router.basePath + "/" + src}{...otherProps}>{children}</img>
  )
}
