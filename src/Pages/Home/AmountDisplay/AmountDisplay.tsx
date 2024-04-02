import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import { NTypo } from "../../../common/NTypo"
import useSumLoans from "../../../firebase/useSumLoans"

export const AmountDisplay = (props: {h : string}) => {

  const { sumLoans } = useSumLoans();

  console.log(sumLoans)

  return (
    <Container>
      <Paper sx={{ height: props.h, marginBottom: 5}}>
        <NTypo>借金</NTypo>
        <NTypo>{sumLoans}</NTypo>
      </Paper>
    </Container>
  )
}
