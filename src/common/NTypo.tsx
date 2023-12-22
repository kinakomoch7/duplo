import { Typography, TypographyProps } from "@mui/material"
import { commonTextStyle } from "./style"

export const NTypo = (props: TypographyProps) => {
  return (
    <Typography {...props} style={{ ...props.style, ...commonTextStyle }} >
      {props.children}
    </Typography>
  )
}
