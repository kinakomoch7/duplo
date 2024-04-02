import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { REGISTER_PATH } from "../../../constants/path";

export const FloatingAddButton = () => {

  const navigate = useNavigate()

  return (
    <Fab aria-label="add" sx={{ position:'fixed', bottom: 16, right:16 }} onClick={() => navigate(REGISTER_PATH)}>
      <AddIcon />
    </Fab>
  )
}
