import "./App.css"
import { NavLink, Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const About = () => (
  <>
    <h1>About</h1>
    <p>Hier finden Sie eine Liste meiner aktuellen Projekte</p>
    <Link to="/about/projects">Projekte</Link>
  </>
)

const Projects = (props) => {
  console.log(props)
  return (
    <>
      <h1>Projekte</h1>
      <div className="projects">
        <Link to="/about/projects/doggy">Doggy Walk</Link>
        <Link to="/about/projects/todo">Todo App</Link>
        <Link  to="/about/projects/cooking">Cooking App</Link>
      </div>
      {props.match.params.projectname &&
        <div>
          <h2>Projekt: {props.match.params.projectname}</h2>
          <p>Lorem ipsum</p>
          <button onClick={ () => props.history.goBack()}>Zurück</button>
        </div>
      }
    </>
  )
}

const Home = ( props ) => (
  <>
    <h1>Home</h1>
    <p>Hallo {props.name}</p>
  </>
)

function App() {

  return (
    <>
    {/* Router ermöglicht innerhalb der React App verschiedene Seiten über die Adresszeile aufzurufen und dazugehörige Components zu rendern*/}
    <Router>
      <div className="navigation">
        <NavLink exact to="/" activeStyle={{color: "red"}}>HOME</NavLink>
        <NavLink to="/about" activeStyle={{color: "red"}}>ABOUT</NavLink>
      </div>
      {/* Switch stellt sicher, dass nur eine der definierten Routes aufgerufen wird */}
      <Switch>
        {/* Route erwartet einen path mit dem aufgerufenem Verzeichnis und einem Component der gerendert werden soll */} 
        <Route exact path="/about" component={About} />
        {/* exact stellt sicher, dass der Component nur gerendert wird, wenn der Aufruf genau mit dem path übereinstimmt */}
        <Route exact path="/about/projects" component={Projects} />
        <Route exact path="/about/projects/:projectname" component={Projects} />
        {/* components erwartet eine Variable mit einer Komponente, während render eine Funktion erwartet und jsx code zurückgibt. So können wir unserer Komponente props übergeben. */}
        <Route exact path="/" render={() => <Home name={"Codebusters"}/>} />
      </Switch>
    </Router>
    
    </>
  )
};

export default App