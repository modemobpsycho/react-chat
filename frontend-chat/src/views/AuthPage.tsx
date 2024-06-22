import { Container, Box } from '@mui/material'

export default function AuthPage({ children }: { children?: React.ReactNode }) {
	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{children}
			</Box>
		</Container>
	)
}
