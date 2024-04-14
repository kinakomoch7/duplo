import { Container, Grid, Paper, Stack } from "@mui/material"
import { DeleteHistory } from "./DeleteHistory"
import { NTypo } from "../../../common/NTypo"
import { addLoanType } from "../../../types/addLoanType"
import { ToFormatDate } from "./ToFormatDate"


export const AmountHistoryCard = (props:addLoanType) => {

  const {payUser, money, payTime, payType} = props;

  const leftSpace = 6

  const formattedPayTime = ToFormatDate(payTime)
  const absMoney = Math.abs(money)
  const formattedMoney = absMoney.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})


  return (
    <Paper >
      <Container >
      <Grid container>
        <Grid item xs={leftSpace}>
          <NTypo variant='h6' >
            {payUser}
          </NTypo>
        </Grid>
        <Grid item xs={12 - leftSpace}>
          <NTypo variant='h6' >
          {formattedMoney}
          </NTypo>
        </Grid>
        <Grid item xs={leftSpace}>
          <NTypo variant='caption' >
            {formattedPayTime}
          </NTypo>
        </Grid>
        <Grid item xs={12 - leftSpace}>
          <Stack direction='row' justifyContent='space-between'>
            {payType}
            <DeleteHistory />
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </Paper>
  )
}
