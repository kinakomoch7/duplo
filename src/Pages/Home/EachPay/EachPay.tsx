import { TEST_DATA } from "../../../constants/testData"
import { EllipseContent } from "./EllipseContent"

export const EachPay = () => {
  return (
    <div style={{ display:'flex', flexDirection:'row' }}>
      <EllipseContent style={{ borderRadius:'0 170px 170px 0' }} name={TEST_DATA.ownName} money={TEST_DATA.ownTotal}/>
      <EllipseContent style={{ borderRadius:'170px 0 0 170px' }} name={TEST_DATA.partnerName} money={TEST_DATA.partnerTotal}/>
    </div>
    
  )
}
