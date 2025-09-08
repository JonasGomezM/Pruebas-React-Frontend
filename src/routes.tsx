import { createBrowserRouter } from 'react-router-dom';
import { UsersPage } from './features/PDF/pages/UsersPage';
import { LoginPage } from './features/login/pages/LoginPage';
import { Layout } from './layout/Layout';
import { Memo } from './features/hook-memo/Memo';
// import MyCalendar from './features/tableCalendary/TableCalendary';
import {MyCalendar} from './features/programacion_unidades/MyCalendary';

export const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children:[
    {
      path:'',
      element: <UsersPage/>
    },
    {
      path:'/login',
      element: <LoginPage/>
    },
    {
      path:'/memo',
      element: <Memo/>
    },
    {
      path:'/Calendario',
      element: <MyCalendar />
    },
    {
      path:'/Calendario2',
      element: <MyCalendar />
    }
  ]
}])