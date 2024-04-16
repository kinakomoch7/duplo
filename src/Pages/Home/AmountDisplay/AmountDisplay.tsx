import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import useSumLoans from "../../../firebase/useSumLoans"
import { AmountDisplayBar } from "./AmountDisplayBar"
import Box from "@mui/material/Box"

export const AmountDisplay = (props: {h : string}) => {

  const { sumLoansPositive, sumLoansNegative } = useSumLoans();

  const BarList = [
    {label: '自分', money: sumLoansPositive ?? 0},
    {label: '相手', money: -(sumLoansNegative ?? 0)},
    {label: '残り', money: (sumLoansPositive ?? 0) + (sumLoansNegative ?? 0)}
  ]

  return (
    <Container >
      <Paper sx={{ height: props.h, marginBottom: 5 }}>
        <Container >
          <Box sx={{ height:'5vh' }} />
          {BarList.map((item, index) => (
            <AmountDisplayBar key={index} label={item.label} money={item.money}/>
          ))}
        </Container>
      </Paper>
    </Container>
  )
}
