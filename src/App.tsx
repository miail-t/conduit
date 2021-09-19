import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Route, Router } from 'react-router-dom';
import { RootState } from './rootReducer'
import { fetchUser } from './redux/userSlice'
import router from './route';
import {ToastContainer} from "react-toastify";
import { createBrowserHistory } from "history";
import Header from './component/Header';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

export const customHistory = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    if (!username || username === '') {
      dispatch(fetchUser())
    }
  })

  const route = router.map((elem, i) => (
    <Route key={i} path={elem.path} exact={elem.exact} component={elem.component} />
  ));
  return (
    <Router history={customHistory} >
      <div className="App container">
        <Header />
        {route}
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
