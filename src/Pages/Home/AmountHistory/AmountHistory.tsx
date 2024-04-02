import { Container, Grid } from "@mui/material"
import { AmountHistoryCard } from "./AmountHistoryCard"

export const AmountHistory = (props: {h: string}) => {

  const TEST = [ 1, 2, 3, 4, 5];

  return (
    <Container maxWidth='md' sx={{ maxHeight:props.h, overflow:'auto' }}>
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
