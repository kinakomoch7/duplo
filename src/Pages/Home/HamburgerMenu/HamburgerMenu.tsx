import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const HamburgerMenu = () => {
  return (
    <div style={{ display:'flex', justifyContent:'flex-end' }}>
      <IconButton aria-label='hamburger_menu' >
        <MenuIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}
