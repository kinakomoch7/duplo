import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { HOME_PATH, MENU_PATH, REGISTER_PATH } from "../../constants/path";
import { useNavigate } from "react-router-dom";
import { NIconButton } from "../NIconButton";
import { NIconButtonProps } from "../../types/IconButtonProps";
import { HOME, MENU, REGISTER } from '../../constants/Footer';
import { WHITE } from '../style';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { FooterIconStyle, footerTypoStyle } from './style';


export const Footer = () => {

  const navigate = useNavigate();

  const eventHandler = (path: string) => {
    navigate(path)
  }


  const IconPropsLists:NIconButtonProps[] = [
  { 
    ButtonProps:{
      onClick: ()=>eventHandler(HOME_PATH),
    },
    Icon:<HomeIcon sx={FooterIconStyle} />,
    TypoProps:{
      children: HOME,
      ...footerTypoStyle
    }
  },
  {
    ButtonProps:{
      onClick: ()=>eventHandler(REGISTER_PATH)
    },
    Icon:<AddCardIcon sx={FooterIconStyle} />,
    TypoProps:{
      children:REGISTER,
      ...footerTypoStyle
    }
  },
  {
    ButtonProps:{
      onClick: ()=>eventHandler(MENU_PATH)
    },
    Icon:<FormatListBulletedIcon sx={FooterIconStyle} />,
    TypoProps:{
      children:MENU,
      ...footerTypoStyle
    }
  }]



  return (
    <AppBar component='footer' position='static' sx={{ backgroundColor:WHITE, position:'absolute', bottom:0 }}>
      <Container maxWidth='md' sx={{ display: 'flex', justifyContent:'space-evenly'}}>
          {IconPropsLists.map((item) => {
            return (
              <NIconButton {...item} />
            )
          })}
      </Container>
    </AppBar>
  );
};
