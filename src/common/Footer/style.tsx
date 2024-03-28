import { TypographyProps } from '@mui/material/Typography';
import { CSSProperties } from 'react';
import { BLACK } from '../style';

const FOTTER_ICON_SIZE = 30;

export const FooterIconStyle: CSSProperties = {
  width: FOTTER_ICON_SIZE,
  height:FOTTER_ICON_SIZE,
  color: BLACK
}

export const footerTypoStyle: TypographyProps = {
  color: BLACK,
  align: 'center',
  fontWeight: 'bold'
}
