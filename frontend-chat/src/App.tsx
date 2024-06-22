import { Header } from './components/shared/Header'
import './styles/App.scss'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import AuthPage from './views/AuthPage'
import { ChatsPage } from './views/ChatsPage'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

const Layout = () => (
	<>
		<Header />
		<Outlet />
	</>
)
function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: '/login',
					element: (
						<AuthPage>
							<LoginForm />
						</AuthPage>
					),
				},
				{
					path: '/sign-up',
					element: (
						<AuthPage>
							<RegisterForm />
						</AuthPage>
					),
				},
				{
					path: '/chats',
					element: <ChatsPage />,
				},
			],
		},
	])
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
