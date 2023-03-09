
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar.jsx";
import { Container } from "./Layout.styled.js";


export default function Layout() {

  return (

    <Container>
      <AppBar />
      <Outlet/>
    </Container>
)

}