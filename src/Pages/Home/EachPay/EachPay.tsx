import { EllipseContent } from "./EllipseContent"

export const EachPay = () => {
  return (
    <div style={{ display:'flex', flexDirection:'row' }}>
      <EllipseContent style={{ borderRadius:'0 170px 170px 0' }} />
      <EllipseContent style={{ borderRadius:'170px 0 0 170px' }} />
    </div>
    
  )
}
