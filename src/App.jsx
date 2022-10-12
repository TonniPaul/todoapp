import './App.css'
import Nav from './components/nav/Nav'
import Todo from './components/todo/Todo'
import moon from './assets/icon-moon.svg'
import sun from './assets/icon-sun.svg'
import { useEffect, useState } from 'react'



function App() {
  const [theme, setTheme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');

  useEffect(() => {
    localStorage.setItem("themeColor",theme)
  }, [theme])

 const handleToggleTheme= () => {
  setTheme((currentTheme) => (currentTheme === 'light'? 'dark': 'light'))
  }
  return (
    <div className="App" id={theme}>
      <Nav
        mode={theme === 'dark' ? sun : moon }
        toggleTheme={handleToggleTheme}
       />
      <Todo />

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://tonnipaul.live">TonniPaul</a>.
      </div>
    </div>
  )
}

export default App
