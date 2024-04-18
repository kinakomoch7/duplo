
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HOME_PATH, REGISTER_PATH } from "../../constants/path";
import { NotFound } from "../NotFound/NotFound";
import { Register } from "../Register/RegisterPage/Register";
import { userContext } from "./UserContext";
import { WHITE } from "../../common/style";
import { Home } from "../Home/HomePage/Home";

type SignAuthProps = {
  email: string | null;
}

export const SignAuth = (props:SignAuthProps) => {

  const { email } = props;

  return (
    <userContext.Provider value={email}>
      <BrowserRouter>
        <div style={{backgroundColor:WHITE, height:'100vh'}}>
          <div style={{ height: '95vh' }}>
            <Routes >
              <Route path={HOME_PATH} element={ <Home /> } />
              <Route path={REGISTER_PATH} element={ <Register /> } />
              <Route path='*' element={ <NotFound /> } />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  
    </userContext.Provider>
  )
}
