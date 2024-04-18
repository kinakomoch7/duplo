import { signInWithRedirect } from "firebase/auth";
import { NButton } from "../../common/NButton";
import { SignAuth } from "./SignAuth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from "../../firebase/firebase";
import Container from "@mui/material/Container/Container";
import { NTypo } from "../../common/NTypo";
import { Stack } from "@mui/material";



export const SignIn = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    signInWithRedirect(auth, provider).catch((err) => alert(err.message));
  }


  if (user) {
    return <SignAuth email={user.email}/>
  } else {
    return (
      <Container>
        <Stack direction='column' spacing={3} sx={{  paddingTop:'7vh' }}>
        <NTypo>SignIn</NTypo>
        <NButton onClick={signIn} variant="outlined">SIGN IN</NButton>
        </Stack>
      </Container>
    )
  }
};