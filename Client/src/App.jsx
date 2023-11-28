/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { //! QUITAR COMENTARIOS AL AGREGAR LAS PAGINAS
AddJob,
Admin,
AllJobs,
DashboardLayout,
// DeleteJob,
// EditJob,
Error,
HomeLayout,
Landing,
Login,
Profile,
Register,
Stats,
} from './pages';


export const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
  };

checkDefaultTheme();

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <AddJob />
                    },
                    {
                        path: 'stats',
                        element: <Stats />
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'admin',
                        element: <Admin />
                    },
                ]
            },
        ]
    },
]);

const App = () => {
  return <RouterProvider router={router} />
};
export default App