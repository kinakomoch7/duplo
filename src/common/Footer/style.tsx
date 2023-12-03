import { css } from "@emotion/react";
import { DEEP_GREEN, WHITE } from "../style";
import { BoxProps } from "@mui/material";


export const styles = {
  container:css({
    width:'100%',
    position:"absolute",
    bottom:0
  }),
  list:css({
    display:"flex",
    flexDirection:'row'
  })
}

export const NBoxProps:BoxProps[] = [
  {
    sx:{
      width:'100%',
      height:130,
      backgroundColor:WHITE,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderWidth:5,
      borderColor:DEEP_GREEN,
      borderStyle:'solid'
    }
  },
  {
    sx:{
      width:150,
      height:150,
      bottom:60,
      position:"relative",
      borderStyle:'solid',
      borderWidth:5,
      borderRadius:'50%',
      borderColor:DEEP_GREEN,
      backgroundColor:WHITE,
    }
  }]