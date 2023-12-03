import { IconButton, Typography } from "@mui/material"
import { NIconButtonProps } from "../types/IconButtonProps"


export const NIconButton = (props:NIconButtonProps) => {

  const { ButtonProps, Icon, TypoProps} = props

  return (
    <div style={{ display:"flex", flexDirection:"column" }}>
      <IconButton {...ButtonProps}>{Icon}</IconButton>
      <Typography {...TypoProps} />
    </div>
  );
};
