import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#767677',

		'& + .MuiInputBase-root.MuiOutlinedInput-root .MuiInputAdornment-root':
			{
				display: 'none',
			},
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'black',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'black',
		},
		'&:hover fieldset': {
			borderColor: 'black',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'black',
		},
	},
});

export default CssTextField;
