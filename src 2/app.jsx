import { Route, Switch, Redirect } from 'react-router-dom';
import Authentication from './component/authentication'
// import Registration from './component/registration'
import SearchForm from './component/searchForm';
import Favourites from './component/favourites'
import LineCountFavourites from './component/lineCounFavorites'
import PathLine from './component/pathLine'
import Exit from './component/exit'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { loadCity } from './redux/action';
import Hotels from './component/hotels'
import FilterBtn  from './component/filterBtn' 
import Main from './pages/main'
import Login from './pages/login'


function App({ parametrs , data}) {
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(loadCity(parametrs.city, parametrs.date, parametrs.countDay));
  }, []);

  return (
    // <Login/>
    <Switch>
      <Route path="/main" component={Main}></Route>
      <Route path="/" component={Login}></Route>
      {/* {data.formIsValid && <Redirect to = '/main'/>} */}
    </Switch>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.AuthValidation,
    parametrs: state.searchHotel.searchParametrs,
  };
};

export default connect(mapStateToProps, null)(App);
