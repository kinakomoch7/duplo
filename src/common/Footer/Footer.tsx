import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { HOME_PATH, MENU_PATH, REGISTER_PATH } from "../../constants/path";
import { useNavigate } from "react-router-dom";
import { HOME, MENU, REGISTER } from '../../constants/Footer';
import { FooterIconStyle } from './style';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';


export const Footer = () => {

  const navigate = useNavigate();

  const BottomNavActionList = [
    {
      path: HOME_PATH,
      label: HOME,
      icon: <HomeIcon sx={FooterIconStyle} />
    },
    {
      path: REGISTER_PATH,
      label: REGISTER,
      icon: <AddCardIcon sx={FooterIconStyle} />
    },
    {
      path: MENU_PATH,
      label: MENU,
      icon: <FormatListBulletedIcon sx={FooterIconStyle} />
    }
  ]

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels onChange={(_e, value) => navigate(value)}>
        {BottomNavActionList.map((item, index) =>
          <BottomNavigationAction
            key={index}
            value={item.path}
            label={item.label}
            icon={item.icon}
            sx={{ fontWeight: 'bold' }}/>
        )}
      </BottomNavigation>
    </Paper>
  );
};
