import { NBox } from "../../../common/NBox"
import { BLACK, WHITE } from "../../../common/style"

type Props = {
  style: React.CSSProperties;
}

export const EllipseContent = (props:Props) => {
  return (
    <NBox style={{ width:'50%', height:'40vh', border:`solid 1px ${BLACK}`, backgroundColor:WHITE, ...props.style}}></NBox>
  )
}
