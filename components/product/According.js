import DoNotTouchOutlinedIcon from '@mui/icons-material/DoNotTouchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import IronOutlinedIcon from '@mui/icons-material/IronOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';

const guides = [
	{
		id: 1,
		icon: <WarningAmberIcon />,
		title: 'Do not bleach',
	},
	{
		id: 2,
		icon: <StopCircleOutlinedIcon />,
		title: 'Tumble dry low heat',
	},
	{
		id: 3,
		icon: <NotInterestedOutlinedIcon />,
		title: 'Do not dry clean',
	},
	{
		id: 4,
		icon: <IronOutlinedIcon />,
		title: 'Touch up with cool iron',
	},
	{
		id: 5,
		icon: <DoNotTouchOutlinedIcon />,
		title: 'Machine wash warm',
	},
];
const StyledAccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
	'&': {
		borderLeft: `4px solid ${theme.palette.common.white}`,
	},
	'&.Mui-expanded': {
		borderLeftColor: theme.palette.common.black,
	},
}));

export default function According() {
	const renderGuides = guides.map(({ id, icon, title }, index) => (
		<Grid
			item
			xs={12}
			md={6}
			key={id}
			sx={{ display: 'flex', alignItems: 'center' }}>
			{icon}
			<Typography
				sx={{
					marginLeft: 1,
					cursor: 'text',
				}}>
				{title}
			</Typography>
		</Grid>
	));
	return (
		<>
			<Accordion square>
				<StyledAccordionSummary
					sx={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='h6' component='h6'>
						Mô tả
					</Typography>
				</StyledAccordionSummary>
				<AccordionDetails>
					<Grid container spacing={2}>
						<Grid item xs={12} md>
							<Stack direction='column'>
								<Typography
									variant='h4'
									component='h4'
									className='italic tracking-wide break-words'>
									CHIẾC QUẦN TIE-DYE CÓ SỬ DỤNG CHẤT LIỆU TÁI
									CHẾ.
								</Typography>
								<Typography
									variant='body1'
									component='p'
									className='whitespace-pre-line whitespace-pre-wrap'>
									Thể thao cộng thêm chút tinh nghịch. Đó là
									cách bạn miêu tả bé nhà bạn. Và cũng chính
									là cách chúng tôi miêu tả chiếc quần trẻ em
									adidas này. Hình ảnh nàng Vịt Daisy nhà
									Disney trượt patin cùng thiết kế tie-dye đem
									đến nét vui tươi, rạng rỡ cho mọi hoạt động
									trong ngày. Công nghệ AEROREADY thoát ẩm
									giúp bé luôn khô ráo khi chơi đùa.{'\n'} Làm
									từ một nhóm chất liệu tái chế và có chứa tối
									thiểu 60% thành phần tái chế, sản phẩm này
									đại diện cho một trong số rất nhiều các giải
									pháp của chúng tôi hướng tới chấm dứt rác
									thải nhựa.
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} md my='auto'>
							<Image
								src='http://loremflickr.com/640/480/city'
								alt='pro'
								layout='responsive'
								width='100%'
								height='100%'
							/>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion square>
				<StyledAccordionSummary
					sx={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='h6' component='h6'>
						Chăm sóc
					</Typography>
				</StyledAccordionSummary>
				<AccordionDetails>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Stack direction='column'>
								<Typography
									noWrap
									variant='h4'
									component='h4'
									className='bold tracking-wide'>
									HƯỚNG DẪN GIẶT
								</Typography>
								<Grid container spacing={2}>
									{renderGuides}
								</Grid>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6}>
							<Stack direction='column'>
								<Typography
									variant='h4'
									component='h4'
									className='bold tracking-wide'>
									THÔNG TIN CHĂM SÓC PHỤ TRỢ
								</Typography>
								<Grid container spacing={2}>
									<List>
										<ListItem>
											<ListItemIcon>
												<FiberManualRecordRoundedIcon
													sx={{ fontSize: 10 }}
												/>
											</ListItemIcon>
											<ListItemText primary='Do not use fabric softener' />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiberManualRecordRoundedIcon
													sx={{ fontSize: 10 }}
												/>
											</ListItemIcon>
											<ListItemText primary='Use mild detergent only' />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiberManualRecordRoundedIcon
													sx={{ fontSize: 10 }}
												/>
											</ListItemIcon>
											<ListItemText primary='Do not iron print' />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiberManualRecordRoundedIcon
													sx={{ fontSize: 10 }}
												/>
											</ListItemIcon>
											<ListItemText primary='Wash with like colors' />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<FiberManualRecordRoundedIcon
													sx={{ fontSize: 10 }}
												/>
											</ListItemIcon>
											<ListItemText primary='© Disney' />
										</ListItem>
									</List>
								</Grid>
							</Stack>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion square>
				<StyledAccordionSummary
					sx={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='h6' component='h6'>
						Thông tin chi tiết
					</Typography>
				</StyledAccordionSummary>
				<AccordionDetails>
					<Grid container spacing={2}>
						<Grid item xs={12} md>
							<Stack direction='column'>
								<Typography
									variant='h4'
									component='h4'
									className='italic tracking-wide break-words'>
									CHIẾC QUẦN TIE-DYE CÓ SỬ DỤNG CHẤT LIỆU TÁI
									CHẾ.
								</Typography>
								<Typography
									variant='body1'
									component='p'
									className='whitespace-pre-line whitespace-pre-wrap'>
									Thể thao cộng thêm chút tinh nghịch. Đó là
									cách bạn miêu tả bé nhà bạn. Và cũng chính
									là cách chúng tôi miêu tả chiếc quần trẻ em
									adidas này. Hình ảnh nàng Vịt Daisy nhà
									Disney trượt patin cùng thiết kế tie-dye đem
									đến nét vui tươi, rạng rỡ cho mọi hoạt động
									trong ngày. Công nghệ AEROREADY thoát ẩm
									giúp bé luôn khô ráo khi chơi đùa.{'\n'} Làm
									từ một nhóm chất liệu tái chế và có chứa tối
									thiểu 60% thành phần tái chế, sản phẩm này
									đại diện cho một trong số rất nhiều các giải
									pháp của chúng tôi hướng tới chấm dứt rác
									thải nhựa.
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} md my='auto'>
							<Image
								src='http://loremflickr.com/640/480/city'
								alt='pro'
								layout='responsive'
								width='100%'
								height='100%'
							/>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</>
	);
}
