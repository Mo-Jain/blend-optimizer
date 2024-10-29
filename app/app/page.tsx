import { MyThemeContextProvider } from "./context/themeContext"
import Landing from "./components/Landing"
import "./globals.css";

export default function Dashboard() {

  
  return (
    <MyThemeContextProvider>
      <Landing/>
    </MyThemeContextProvider>
  )
}