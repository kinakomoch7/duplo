import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

export const FloatingAddButton = () => {



  return (
    <Fab aria-label="add" sx={{ position:'fixed', bottom: 16, right:16 }}>
      <AddIcon />
    </Fab>
  )
}
