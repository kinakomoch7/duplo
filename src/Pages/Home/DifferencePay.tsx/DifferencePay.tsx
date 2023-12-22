import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo"
import { BLACK, WHITE } from "../../../common/style"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const DifferencePay = () => {

  const money = 20000;

  return (
    <NBox style={{ width:'80%', height:'30vh', margin:'auto', border: `solid 2px ${BLACK}`, borderRadius:10, backgroundColor: WHITE }} >
      <div style={{ height:'100%', justifyContent:'space-evenly', display:"flex", flexDirection: 'column' }}>
        <div style={{ display:"flex", flexDirection:'row', justifyContent:"center" }} >
          <NTypo style={{ color:BLACK, fontSize:50, textAlign:"center"  }} >A</NTypo>
          <ArrowRightAltIcon sx={{ width:70, height:70, color:BLACK }} />
          <NTypo style={{ color:BLACK, fontSize:50, textAlign:"center" }} >B</NTypo>
        </div>
        <div style={{  }}>
          <NTypo style={{ color:BLACK, textAlign:"center", fontSize:30, fontWeight:"bold" }}>¥ {money} 円支払う</NTypo>
        </div>
      </div>
    </NBox>
  )
}
