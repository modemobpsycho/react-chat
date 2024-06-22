import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	TextField,
	Typography,
} from '@mui/material'

function RegisterForm() {
	const handleSubmit = (event: {
		preventDefault: () => void
		currentTarget: HTMLFormElement | undefined
	}) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		})
	}
	return (
		<>
			<Typography component='h1' variant='h5'>
				Sign up
			</Typography>
			<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='password'
					label='Password'
					type='password'
					id='password'
					autoComplete='current-password'
				/>
				<FormControlLabel
					control={<Checkbox value='remember' color='primary' />}
					label='Remember me'
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
				>
					Sign up
				</Button>
			</Box>
		</>
	)
}

export default RegisterForm
