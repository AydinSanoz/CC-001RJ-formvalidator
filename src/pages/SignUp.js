import { TextField } from '@material-ui/core';
import { Wrapper } from './Styles';
import { useState, useEffect } from 'react';

export const SignUp = () => {
	return(

        
        <Wrapper>
			<div>
				<img
					src='../assets/logo.jpeg'
					alt='Clarusway_Logo'
					width='10rem'
					height='10rem'
				></img>
			</div>
			<div>
				<h1>Welcome to Clarusway</h1>
			</div>

			<form>
				<TextField
					id='outlined-name-input'
					label='name'
					type='name'
					autoComplete='current-name'
					variant='outlined'
					fullWidth
				/>

				<TextField
					id='outlined-surname-input'
					label='surname'
					type='surname'
					autoComplete='current-name'
					variant='outlined'
					fullWidth
				/>

				<TextField
					id='outlined-email-input'
					label='email'
					type='email'
					autoComplete='current-email'
					variant='outlined'
					fullWidth
				/>

				<TextField
					id='outlined-password-input'
					label='Password'
					type='password'
					autoComplete='current-password'
					variant='outlined'
					fullWidth
				/>

				<TextField
					id='outlined-password-input'
					label='Confirm Password'
					type='password'
					autoComplete='current-password'
					variant='outlined'
					fullWidth
				/>
			</form>
		</Wrapper>
	
    )
};
