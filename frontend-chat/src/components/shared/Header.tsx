import { ChatOutlined } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { useSelectorUser } from '../../hooks/useSelectors'
import { useNavigate } from 'react-router-dom'

export function Header() {
	const { accessToken } = useSelectorUser()
	const navigate = useNavigate()

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' sx={{ flexGrow: 1 }}>
					Chat App
				</Typography>
				{accessToken && (
					<>
						<IconButton color='inherit'>
							<ChatOutlined />
						</IconButton>
						<Button color='inherit'>Logout</Button>
					</>
				)}
				{!accessToken && (
					<>
						<Button color='inherit' onClick={() => navigate('/sign-up')}>
							Sign up
						</Button>
						<Button color='inherit' onClick={() => navigate('/login')}>
							Log in
						</Button>
					</>
				)}
			</Toolbar>
		</AppBar>
	)
}
