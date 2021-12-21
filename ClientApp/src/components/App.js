import NavBar from './NavBar'
import Main from './Main'
import Header from './Header'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'



function App() {
  return (
      <div className="app">
          <ReactNotification />
      <Header />
      <Main />
      <NavBar />
    </div>
  );
}

export default App;