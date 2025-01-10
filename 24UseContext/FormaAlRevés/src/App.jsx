import { Route, Routes, Navigate } from "react-router";
import { NavBar } from "./routes/components/NavBar.jsx";
import { HomeScreen } from "./routes/HomeScreen.jsx";
import { AboutScreen } from "./routes/AboutScreen.jsx";
import { ContactScreen } from "./routes/ContactScreen.jsx";
import { UsuarioProvider } from "./routes/context/UsuarioProvider.jsx";
import { LoginScreen } from "./routes/LoginScreen.jsx";


export const App = () => {
  return (
    <UsuarioProvider>
      <NavBar></NavBar>

      <Routes>
         <Route path="/" element={<HomeScreen></HomeScreen>} ></Route>
         <Route path="/login" element={<LoginScreen></LoginScreen>} ></Route>
         <Route path="/about" element={<AboutScreen></AboutScreen>} ></Route>
         <Route path="/contact" element={<ContactScreen></ContactScreen>} ></Route>
         <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      
    </UsuarioProvider>
  );
};
