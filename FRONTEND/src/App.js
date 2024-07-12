import { Footer, Header } from "./components";
import { AppRoutes } from "./routes/AppRoutes";
import './index.css';


function App() {
  return (  
    <div
   className=" dark:bg-black min-h-screen">
    <Header/>
    <AppRoutes background-color = "gray"/>
    <Footer/>
    </div>
  );
  

}

export default App;
