import './App.css';
import HeaderContainer from './header/HeaderContainer';
import Main from './main/main'

const App = (props) => {
  return (
    <>
      <HeaderContainer store = {props.store}/>
      <Main store = {props.store}/>
    </>
  );
}

export default App;
