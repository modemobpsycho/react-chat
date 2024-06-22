import {
	Avatar,
	Button,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	TextField,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

// const useStyles = makeStyles({
// 	table: {
// 		minWidth: 650,
// 	},
// 	chatSection: {
// 		width: '100%',
// 		height: '80vh',
// 	},
// 	headBG: {
// 		backgroundColor: '#e0e0e0',
// 	},
// 	borderRight500: {
// 		borderRight: '1px solid #e0e0e0',
// 	},
// 	messageArea: {
// 		height: '70vh',
// 		overflowY: 'auto',
// 	},
// })

export function ChatsPage() {
	// const classes = useStyles()
	return (
		<div>
			<Grid container component={Paper} sx={{ height: '80vh', minWidth: 650 }}>
				<Grid item xs={3} sx={{ borderRight: '1px solid #ccc' }}>
					<List>
						<ListItem key='RemySharp'>
							<ListItemIcon>
								<Avatar
									alt='Remy Sharp'
									src='https://mui.com/static/images/avatar/1.jpg'
								/>
							</ListItemIcon>
							<ListItemText primary='John Wick' />
						</ListItem>
					</List>
					<Divider />
					<Grid item xs={12} sx={{ p: 2 }}>
						<TextField
							id='outlined-basic-email'
							label='Search'
							variant='outlined'
							fullWidth
						/>
					</Grid>
					<Divider />
					<List>
						<ListItem key='RemySharp'>
							<ListItemIcon>
								<Avatar
									alt='Remy Sharp'
									src='https://mui.com/static/images/avatar/1.jpg'
								/>
							</ListItemIcon>
							<ListItemText primary='Remy Sharp' secondary='online' />
						</ListItem>
						<ListItem key='Alice'>
							<ListItemIcon>
								<Avatar
									alt='Alice'
									src='https://mui.com/static/images/avatar/3.jpg'
								/>
							</ListItemIcon>
							<ListItemText primary='Alice' />
						</ListItem>
						<ListItem key='CindyBaker'>
							<ListItemIcon>
								<Avatar
									alt='Cindy Baker'
									src='https://mui.com/static/images/avatar/2.jpg'
								/>
							</ListItemIcon>
							<ListItemText primary='Cindy Baker' />
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={9}>
					<List sx={{ flexGrow: 1, width: '100%', height: '80vh' }}>
						<ListItem key='1'>
							<Grid container>
								<Grid item xs={12}>
									<ListItemText
										sx={{ textAlign: 'right' }}
										primary="Hey man, What's up ?"
									/>
								</Grid>
								<Grid item xs={12}>
									<ListItemText sx={{ textAlign: 'right' }} secondary='09:30' />
								</Grid>
							</Grid>
						</ListItem>
						<ListItem key='2'>
							<Grid container>
								<Grid item xs={12}>
									<ListItemText primary='Hey, I am Good! What about you ?' />
								</Grid>
								<Grid item xs={12}>
									<ListItemText secondary='09:31' />
								</Grid>
							</Grid>
						</ListItem>
						<ListItem key='3'>
							<Grid container>
								<Grid item xs={12}>
									<ListItemText
										sx={{ textAlign: 'right' }}
										primary="Cool. I am good, let's catch up!"
									/>
								</Grid>
								<Grid item xs={12}>
									<ListItemText sx={{ textAlign: 'right' }} secondary='10:30' />
								</Grid>
							</Grid>
						</ListItem>
					</List>
					<Divider />
					<Grid component='div' container sx={{ p: 2 }}>
						<Grid item xs={11}>
							<TextField
								id='outlined-basic-email'
								label='Type Something'
								fullWidth
							/>
						</Grid>
						<Grid item xs={1} component='div' sx={{ textAlign: 'right', p: 1 }}>
							<Button variant='outlined'>
								<SendIcon />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}
