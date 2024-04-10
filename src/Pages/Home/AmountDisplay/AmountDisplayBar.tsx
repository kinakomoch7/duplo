import { Stack } from "@mui/system";
import { NTypo } from "../../../common/NTypo";

type Props = {
  label : string,
  money: number|undefined
}

export const AmountDisplayBar = (props:Props) => {

  const {label, money} = props;

  const moneyFormated:string = money ? money.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'}) : '0';

  return (
    <Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 2, borderBottom: 1 }}>
      <NTypo>{label}</NTypo>
      <NTypo>{moneyFormated}</NTypo>
    </Stack>
  )
}
