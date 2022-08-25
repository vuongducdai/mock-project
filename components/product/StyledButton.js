import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => {
	return {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
		borderColor: theme.palette.grey[500],
		borderRadius: 0,
		'&:hover, &:focus': {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			borderColor: theme.palette.grey[500],
		},
	};
});

export default StyledButton;
