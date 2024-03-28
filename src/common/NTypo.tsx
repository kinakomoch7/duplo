import Typography, {TypographyProps} from "@mui/material/Typography"
import { commonTextStyle } from "./style"

export const NTypo = (props: TypographyProps) => {
  return (
    <Typography {...props} style={{ ...props.style, ...commonTextStyle }} >
      {props.children}
    </Typography>
  )
}
