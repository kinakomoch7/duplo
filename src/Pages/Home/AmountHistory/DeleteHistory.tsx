import { DeleteForever } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"

export const DeleteHistory = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'flex-end' }}>
      <IconButton aria-label='delete_history'>
        <DeleteForever fontSize='small' />
      </IconButton>
    </Box>
  )
}
