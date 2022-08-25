import { styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';

const StyledSelect = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(3),
	},
	'& .MuiInputBase-input': {
		borderRadius: 0,
		position: 'relative',
		backgroundColor: theme.palette.common.white,
		border: '1px solid #000',
		fontSize: 18,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		'&:focus': {
			// borderColor: '#000',
			backgroundColor: theme.palette.common.white,
		},
	},
}));

export default StyledSelect;
