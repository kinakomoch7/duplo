import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo"
import { BLACK, WHITE } from "../../../common/style"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const DifferencePay = () => {
  return (
    <NBox style={{ width:'80%', height:'30vh', margin:'auto', border: `solid 2px ${BLACK}`, borderRadius:10, backgroundColor: WHITE }} >
      <div style={{ display:"flex", flexDirection:'row' }} >
        <NTypo >A</NTypo>
        <ArrowRightAltIcon sx={{ width:70, height:70, color:BLACK }} />
        <NTypo >B</NTypo>
      </div>
    </NBox>
  )
}
