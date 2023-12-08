import { Typography, TypographyProps } from "@mui/material"

export const NTypo = (props: TypographyProps) => {
  return (
    <Typography {...props} >{props.children}</Typography>
  )
}
