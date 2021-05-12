import Login from "./component/Login";
import Registration from './component/Registration'
import ArticleForm from './component/ArticleForm'
import Settings from './component/Setting'
import ProfilePage from './component/Profile'
import Article from './component/Article'
import Home  from "./pages/Home";

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/login', exact: true, component: Login },
  { path: '/registration', exact: true, component: Registration },
  { path: '/createArticle', exact: true, component: ArticleForm },
  { path: '/settings', exact: true, component: Settings }, 
  { path: '/profile:username', exact: true, component: ProfilePage },
  { path: '/article:slug', exact: true, component: Article },
  { path: '/Home/globalfeed:pageNember', exact: true, component: Home },

  /*   { path: '/', exact: true, component: Profiles }, */
  /* { path: '/detail/:id', exact: true, component: DetailProfile },
  {
    path: '/detail/:id/edit',
    exact: false,
    component: EditProfile,
    routes: [
      { path: '/detail/:id/edit/employment', exact: true, component: EmploymentForm },
      { path: '/detail/:id/edit/personal', exact: true, component: PersonalForm },
      { path: '/detail/:id/edit/contact', exact: true, component: ContactForm },
    ],
  }, */
];
export default routes;