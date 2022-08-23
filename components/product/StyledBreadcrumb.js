import { Chip } from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';

// const StyledBreadcrumb = styled(Link)(({ theme }) => {
// 	return {
// 		'&:hover, &:focus, &:active': {
// 			backgroundColor: theme.palette.common.black,
// 			color: theme.palette.common.white,
// 		},
// 		// '&:active': {
// 		// 	boxShadow: theme.shadows[1],
// 		// },
// 	};
// });

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor =
		theme.palette.mode === 'light'
			? theme.palette.grey[100]
			: theme.palette.grey[800];
	return {
		backgroundColor,
		height: theme.spacing(3),
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightRegular,

		'&:hover, &:focus': {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
			cursor: 'pointer',
			transform: 'scale(1.1)',
			transition: 'all 0.2s ease-in-out',
		},
		'&:hover .MuiSvgIcon-root': {
			backgroundColor: 'transparent',
			color: theme.palette.common.white,
			transform: 'scale(1.1)',
			transition: 'all 0.2s ease-in-out',
		},
		'&:active': {
			color: 'red',
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12),
		},
	};
});

export default StyledBreadcrumb;
