import './aithenticationForm.scss'
import {useDispatch} from 'react-redux'
import { addBookmark } from '../redux/action';
import {connect} from 'react-redux'
import {authenticationValid, showAlert } from '../redux/action'
import {validator} from '../utils/validator'
import Form from './form'
import { useHistory } from 'react-router-dom';

const Authentication = ({ data, setAuth, showAlert, bookmark, alert }) => {
  const history = useHistory();
  const dispatch = useDispatch()
  let errors
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Все поля обязательны для заполнения',
      },
      emailValid: {
        message: 'Введите логин форматом example@mail.ru',
      },
    },
    password: {
      isRequired: {
        message: 'Все поля обязательны для заполнения',
      },
      minLength: {
        message: 'Минимальная длина пароля 8 символов',
      },
      hasRussianLetters: {
        message: 'Введите только латинские буквы ',
      },
    },
  };

  const handleChange = ({target}) => {
    setAuth({ [target.name]: target.value });
    showAlert(validator(target.value,target.name, validatorConfig), target.name);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ERRORS', alert.email.length);
    if (alert.password.length === 0 && alert.email.length === 0 ){
      console.log('ALERALERYTUVGUVGY');
      let users = [];
      let loginedUser
      if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
      } else {
        localStorage.setItem(
          'users',
          JSON.stringify([
            {
              password: data.password,
              email: data.email,
              bookmarks: [],
            },
          ])
        );
        users = JSON.parse(localStorage.getItem('users'));
      }
      console.log('users', users);
      console.log(users.email);
      users.some((user) => {
        console.log('USER', user);
        if (user.email === data.email && user.password === data.password) {
          console.log('Everything is OK');
          // dispatch(addBookmark(...user.bookmarks));
          history.push('/main');
          console.log(bookmark);
          loginedUser = user;
          return user;
        } else if (user.email === data.email && user.password !== data.password){
          console.log('Wrong credentinal');
          loginedUser = 'Wrong credentinal';
          return null;
        }else{
          return null
        }
      });
      // let users = JSON.parse(localStorage.getItem('users'));
      // = users.filter(user => {
      //     return (user.email === data.email && user.password=== data.password)
      //   })[0]
      console.log(loginedUser);
      if (loginedUser && loginedUser !== 'Wrong credentinal') {
        loginedUser.bookmarks.map((bookmark) =>
          dispatch(addBookmark(bookmark))
        );
      } else if (loginedUser !== 'Wrong credentinal') {
        console.log('NEW USER');
        users.push({
          password: data.password,
          email: data.email,
          bookmarks: [],
        });
        localStorage.setItem('users', JSON.stringify(users));
        history.push('/main');
      }
    }
  }
  return (
    <div className="authentication">
      <h1 className="authentication__title">Simple Hotel Check</h1>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.AuthValidation,
    bookmark: state.app.bookmark,
    alert: state.app.alert
  }
}

const mapDispatchToProps = {
  setAuth: authenticationValid,
  showAlert: showAlert,
};

export default connect(mapStateToProps,mapDispatchToProps)(Authentication);