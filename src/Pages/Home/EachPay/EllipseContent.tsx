import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo";
import { BLACK, WHITE } from "../../../common/style"

type Props = {
  style: React.CSSProperties;
  name: string;
  money: number;
}

export const EllipseContent = (props:Props) => {

  const { style, name, money } = props;

  const formattedMony = money.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});

  return (
    <NBox
      style={{ width:'50%', height:'40vh', border:`solid 1px ${BLACK}`, backgroundColor:WHITE, ...style}}>
      <div style={{ display: "flex", flexDirection: 'column', height:'100%', justifyContent:'center' }}>
        <NTypo style={{ fontSize:30 }} >{name}さん</NTypo>
        <NTypo style={{ fontSize:30 }}>{formattedMony}</NTypo>
      </div>
    </NBox>
  )
}
