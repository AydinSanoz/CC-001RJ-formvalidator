import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '30%',
		margin: 'auto',
		border: '1px solid black',
	},
	textField: {
		backgroundColor: 'white',
	},
	title: {
        color: 'white',
        textAlign: 'center',
        fontSize: '3rem',
        fontFamily: 'cursive',
    },
    button :{
        backgroundColor : 'purple',
    }
	// root: {
	// 	'& .MuiTextField-root': {
	//         margin: theme.spacing(1),

	// 	},
	// },
}));

export const SignUp = () => {
	const styles = useStyles();
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			}}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
						values.email
					)
				) {
					errors.email = 'Invalid email address';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 4);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<div
					style={{
						background: 'black',
						width: '80vw',
						margin: 'auto',
						paddingTop: '10vh',
						paddingBottom: '10vh',
					}}
				>
					<h1 className={styles.title}>Welcome To Clarusway</h1>

					<form
						onSubmit={handleSubmit}
						Validate
						autoComplete='on'
						className={styles.form}
					>
						<Grid
							container
							direction='column'
							justify='center'
							alignItems='stretch'
							spacing={3}
							fullWidth
						>
							<Grid item xs={12}>
								<TextField
									className={styles.textField}
									error
									id='firstName'
									label='First Name'
									helperText={
										errors.firstName &&
										touched.firstName &&
										errors.firstName
									}
									variant='filled'
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									className={styles.textField}
									error
									id='lastName'
									label='Last Name'
									helperText={
										errors.lastName &&
										touched.lastName &&
										errors.lastName
									}
									variant='filled'
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									className={styles.textField}
									error
									id='email'
									label='Email'
									helperText={
										errors.email &&
										touched.email &&
										errors.email
									}
									variant='filled'
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									className={styles.textField}
									error
									id='password'
									label='Password'
									helperText={
										errors.email &&
										touched.email &&
										errors.email
									}
									variant='filled'
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
                                    className = {styles.button}
									disabled={isSubmitting}
									type='submit'
									variant='contained'
									fullWidth
								>
									Register
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Button
                                    className = {styles.button}
									variant='contained'
									fullWidth
									onClick={() => alert('Google')}
								>
									Register with Google
								</Button>
							</Grid>
						</Grid>
					</form>
				</div>
			)}
		</Formik>
	);
};
