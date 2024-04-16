import { Container, Grid } from "@mui/material"
import { AmountHistoryCard } from "./AmountHistoryCard"
import useAllLoans from "../../../firebase/useAllLoans"

export const AmountHistory = (props: {h: string}) => {

  const { loans } = useAllLoans();

  return (
    <Container maxWidth='md' sx={{ maxHeight:props.h, overflow:'auto' }}>
      <Grid container spacing={3}>
        {loans.map((item, index) => (
          <Grid item xs={12} key={index}>
            <AmountHistoryCard
              id={item.id}
              payUser={item.payUser}
              payType={item.payType}
              money={item.money}
              payTime={item.payTime}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
