import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Breadcrumbs, Chip, Typography } from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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

const BreadCrumb = ({ name }) => {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState();

	useEffect(() => {
		const pathWithoutQuery = router.asPath.split('?')[0];
		let pathArray = pathWithoutQuery.split('/');
		pathArray.shift();

		pathArray = pathArray.filter(path => path !== '');

		const breadcrumbs = pathArray.map((path, index) => {
			const isLastItem = pathArray.length - 1 === index;
			const href = '/' + pathArray.slice(0, index + 1).join('/');
			return {
				href,
				label: path.charAt(0).toUpperCase() + path.slice(1),
				isLastItem,
			};
		});
		breadcrumbs.splice(-2, 1);
		setBreadcrumbs(breadcrumbs);
	}, [router.asPath]);
	return (
		<Breadcrumbs
			aria-label='breadcrumb'
			className='absolute top-4 left-5 z-50'>
			<StyledBreadcrumb
				onClick={() => router.back()}
				component='a'
				label='Trở lại'
				icon={<KeyboardReturnIcon fontSize='small' />}
			/>
			<StyledBreadcrumb href='/' component='a' label='Trang chủ' />
			{breadcrumbs &&
				breadcrumbs.map(breadcrumb => {
					return breadcrumb.isLastItem && name ? (
						<Typography color='common.black' key='currentItem'>
							{name}
						</Typography>
					) : (
						<StyledBreadcrumb
							key={breadcrumb.href}
							href={breadcrumb.href}
							label={breadcrumb.label}
						/>
					);
				})}
		</Breadcrumbs>
	);
};
export { BreadCrumb };
export default StyledBreadcrumb;
