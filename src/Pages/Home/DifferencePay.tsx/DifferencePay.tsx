import { NBox } from "../../../common/NBox"
import { NTypo } from "../../../common/NTypo"
import { BLACK, WHITE } from "../../../common/style"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WestIcon from '@mui/icons-material/West';
import { TEST_DATA } from "../../../constants/testData";
import { SxProps } from "@mui/material";

export const DifferencePay = () => {

  const money = TEST_DATA.ownTotal - TEST_DATA.partnerTotal;

  const formattedMony = Math.abs(money).toLocaleString('ja-JP', {style:'currency', currency: 'JPY'});

  const IconStyle:SxProps = {
    width: 70,
    height: 70,
    color:BLACK
  }

  return (
    <NBox style={{ width:'80%', height:'30vh', margin:'auto', border: `solid 2px ${BLACK}`, borderRadius:10, backgroundColor: WHITE }} >
      <div style={{ height:'100%', justifyContent:'space-evenly', display:"flex", flexDirection: 'column' }}>
        <div style={{ display:"flex", flexDirection:'row', justifyContent:"space-evenly", width:'70vw', margin:'0 auto'}} >
          <NTypo style={{ fontSize:50 }} >{TEST_DATA.ownName}</NTypo>
          { money>0 ? <ArrowRightAltIcon sx={IconStyle} /> : <WestIcon sx={IconStyle}/>}
          <NTypo style={{ fontSize:50 }} >{TEST_DATA.partnerName}</NTypo>
        </div>
        <div style={{  }}>
          <NTypo style={{ fontSize:30 }}>{formattedMony} 円支払う</NTypo>
        </div>
      </div>
    </NBox>
  )
}
