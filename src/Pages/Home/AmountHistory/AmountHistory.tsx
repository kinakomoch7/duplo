import { Container, Grid } from "@mui/material"
import { AmountHistoryCard } from "./AmountHistoryCard"

export const AmountHistory = () => {

  const TEST = [ 1, 2, 3, 4, 5];

  return (
    <Container maxWidth='md' sx={{ maxHeight:'40vh', overflow:'auto' }}>
      <Grid container spacing={3}>
        {TEST.map((_item, index) => (
          <Grid item xs={12} key={index}>
            <AmountHistoryCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
