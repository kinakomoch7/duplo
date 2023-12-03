import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { HOME_PATH, MENU_PATH, REGISTER_PATH } from "../../constants/path";
import { useNavigate } from "react-router-dom";
import { NIconButton } from "../NIconButton";
import { NIconButtonProps } from "../../types/IconButtonProps";
import { NBox } from "../NBox";
import { NBoxProps } from "./style";
import { HOME, MENU, REGISTER } from '../../constants/Footer';
import { BLACK } from '../style';

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
    Icon:<HomeIcon sx={{ width:70, height:70, color:BLACK }} />,
    TypoProps:{
      children: HOME,
      sx:{
        color:BLACK,
        textAlign:'center',
        fontWeight: 'bold'
      }
    }
  },
  {
    ButtonProps:{
      sx:{
        marginTop:1
      },
      onClick: ()=>eventHandler(REGISTER_PATH)
    },
    Icon:<AddCardIcon sx={{ width:70, height:70, color:BLACK }} />,
    TypoProps:{
      children:REGISTER,
      sx:{
        color:BLACK,
        textAlign:'center',
        fontWeight:'bold'
      }
    }
  },
  {
    ButtonProps:{
      onClick: ()=>eventHandler(MENU_PATH)
    },
    Icon:<FormatListBulletedIcon sx={{ width:70, height:70, color:BLACK }} />,
    TypoProps:{
      children:MENU,
      sx:{
        color:BLACK,
        textAlign:'center',
        fontWeight:'bold'
      }
    }
  }]



  return (
    <div style={{ width:'100%' , position:'absolute', bottom:0 }}>
      <NBox {...NBoxProps[0]} >
        <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly' }} >
          <NBox ><NIconButton {...IconPropsLists[0]} /></NBox>
          <NBox {...NBoxProps[1]} ><NIconButton {...IconPropsLists[1]} /></NBox>
          <NBox ><NIconButton {...IconPropsLists[2]} /></NBox>
        </div>
      </NBox>
    </div>
  );
};
