import { SignAuth } from "./SignAuth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/firebase";
import Container from "@mui/material/Container/Container";
import { NTypo } from "../../common/NTypo";
import { Stack } from "@mui/material";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


export const SignIn = () => {

  const [user] = useAuthState(auth);
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: import.meta.env.VITE_FIREBASE_SIGNIN_SUCCESS_URL,
    signInFlow: 'redirect',
  });

  if (user) {
    return <SignAuth email={user.email}/>
  } else {
    return (
      <Container>
        <Stack direction='column' spacing={3} sx={{  paddingTop:'7vh' }}>
        <NTypo>SignIn</NTypo>
        <div id="firebaseui-auth-container" />
        </Stack>
      </Container>
    )
  }
};