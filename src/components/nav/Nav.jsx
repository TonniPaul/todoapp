import "./nav.css"

const Nav = ({mode, toggleTheme}) => {
  return (
    <div className="nav global-styke">
         <nav>
            <h1 className="logo">Todo</h1>
            <img src={mode} alt="mode" onSubmit={toggleTheme} />
         </nav>
    </div>
  )
}

export default Nav