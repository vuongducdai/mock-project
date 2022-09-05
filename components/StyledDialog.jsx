import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import formatNumber from '../utils/formatNumber';
import mapColorData from '../utils/mapColorData';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export const BootstrapDialogTitle = props => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle
			sx={{
				m: 0,
				p: 2,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
			component='h4'
			{...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						marginLeft: 1,
						color: theme => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

const StyledDialog = ({
	open,
	name,
	img,
	price,
	color,
	count,
	title,
	hasContent = true,
	isDelete = false,
	onDelete,
	onClose,
}) => {
	return (
		<BootstrapDialog
			onClose={onClose}
			aria-labelledby='customized-dialog-title'
			open={open}>
			<BootstrapDialogTitle
				id='customized-dialog-title'
				onClose={onClose}>
				{title}
			</BootstrapDialogTitle>
			{hasContent && (
				<DialogContent>
					<div className='flex justify-between p-[5px]'>
						<div className='basis-0 grow m-[5px] flex justify-between'>
							<div className='m-[5px]'>
								<img
									src={img}
									alt='product'
									width='111px'
									height='111px'
								/>
							</div>
							<div className='grow m-[5px]'>
								<p>{name}</p>
								<p>{formatNumber(price)}</p>
								<p className='uppercase'>
									{mapColorData(color)}
								</p>
								<p>1 sản phẩm</p>
							</div>
						</div>
					</div>
				</DialogContent>
			)}
			<DialogActions>
				{isDelete ? (
					<>
						<Button
							onClick={onClose}
							variant='contained'
							sx={{
								backgroundColor: '#64748B',
								color: '#fff',
								'&:hover': {
									backgroundColor: '#616161',
									color: '#fff',
								},
							}}>
							Cancel
						</Button>
						<Button
							onClick={onDelete}
							variant='contained'
							color='error'
							startIcon={<DeleteIcon />}>
							Delete
						</Button>
					</>
				) : (
					<Button autoFocus variant='contained' onClick={onClose}>
						OKE
					</Button>
				)}
			</DialogActions>
		</BootstrapDialog>
	);
};

export default StyledDialog;
