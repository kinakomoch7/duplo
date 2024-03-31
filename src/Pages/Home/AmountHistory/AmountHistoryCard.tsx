import { Container, Grid, Paper } from "@mui/material"
import { DeleteHistory } from "./DeleteHistory"

export const AmountHistoryCard = () => {

  const date = '2002年12月30日'
  const user = '山田太郎'
  const amount = '1000円'

  const leftSpace = 6



  return (
    <Paper >
      <Container >
      <Grid container>
        <Grid item xs={leftSpace}>
          {user}
        </Grid>
        <Grid item xs={12 - leftSpace}>
          {amount}
        </Grid>
        <Grid item xs={leftSpace}>
          {date}
        </Grid>
        <Grid item xs={12 - leftSpace}>
          <DeleteHistory />
        </Grid>
      </Grid>
      </Container>
    </Paper>
  )
}
