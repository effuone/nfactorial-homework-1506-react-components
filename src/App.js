import { useState} from "react";
import { DefaultContext} from "./Context";
import './App.css'
//импортируем стили

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import Mode from "./components/mode";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState('dark')
  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  const handleTheme = ()=>{
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <DefaultContext.Provider value={{ 
      handleCreateFan,
      handleTheme
      }}>
        <Header fan={fan} mode={theme}/>
        <Mode/>
        <Content />
        <Footer mode={theme}/>
    </DefaultContext.Provider>
  );
}
