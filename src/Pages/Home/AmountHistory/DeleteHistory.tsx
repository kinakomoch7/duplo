import { DeleteForever } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import { deleteLoan } from "../../../firebase/useDeleteLoan";

type Props = {
  id: string;
}

export const DeleteHistory = (props:Props) => {

  const { id } = props;

  const deleteHandler = () => {
    deleteLoan(id)
  }

  return (
    <Box sx={{ display:'flex', justifyContent:'flex-end' }}>
      <IconButton aria-label='delete_history' onClick={deleteHandler}>
        <DeleteForever fontSize='small' />
      </IconButton>
    </Box>
  )
}
