import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import { NTypo } from "../../common/NTypo";

type Props = {
  HeadTxt: string
}


export const BackButton = (props:Props) => {

  const { HeadTxt } = props

  const navigate = useNavigate()

  return (
    <Stack direction='row' spacing={2} sx={{ paddingTop:'1.5rem' }}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      <NTypo variant="h6" sx={{ paddingTop: '0.3rem' }} >{HeadTxt}</NTypo>
    </Stack>
  )
}
