import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import StarIcon from "@mui/icons-material/Star";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import formatNumber from "../../utils/formatNumber";
import BlackButton from "../BlackButton";
import According from "./According";
import { BreadCrumb } from "./StyledBreadcrumb";
import StyledButton from "./StyledButton";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const ProductDetail = ({ productProps }) => {
  const { name, img, price, color, size, material, id } = productProps;
  return (
    <Container fixed maxWidth={false} disableGutters={true}>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container spacing={1}>
        <Grid item md={8} xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Box className="relative">
                <BreadCrumb />
                {/* <Breadcrumbs
									aria-label='breadcrumb'
									className='absolute top-4 left-5 z-50'> */}
                {/* <StyledBreadcrumb
										component='a'
										href={router.back()}
										label='Trở lại'
										icon={
											<KeyboardReturnIcon fontSize='small' />
										}
									/>
									<StyledBreadcrumb
										component='a'
										href='/'
										breadcrumb.label
									/>
									<StyledBreadcrumb
										component='a'
										href='/male'
										label='Nam'
									/>
									<Typography color='text.primary'>
										Quần
									</Typography> */}
                {/* </Breadcrumbs> */}
                <InnerImageZoom
                  width={900}
                  src={img}
                  hideHint={true}
                  zoomType="hover"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Stack className="mt-2">
                <According />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper className="h-screen sticky top-0">
            <Box p={3}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography component="h5">Gái • Sportswear</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <StarIcon sx={{ fontSize: 15 }} />
                  <Box
                    sx={{
                      ml: 1.5,
                      mr: 0.5,
                      textDecoration: "underline",
                    }}
                  >
                    11
                  </Box>
                </Box>
              </Stack>
              <Box mt={2}>
                <Typography
                  sx={{
                    wordSpacing: 3,
                  }}
                  variant="h4"
                  component="h4"
                  className="italic tracking-wide break-words"
                >
                  {name}
                </Typography>
                <Typography className="font-medium">
                  {formatNumber(price)}
                </Typography>
              </Box>
              <Box mt={2}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography color="text.primary">{color}</Typography>
                  {/* <Typography color="text.primary">Purple Rush</Typography>
                  <Typography color="text.primary">Sky Rush</Typography> */}
                </Breadcrumbs>
              </Box>
              <Box mt={4}>
                <Typography className="font-medium">Kích cỡ</Typography>
                <Stack direction="row" alignItems="center" flexWrap="wrap">
                  <StyledButton variant="outlined">{size}</StyledButton>
                  <StyledButton variant="outlined">{size}</StyledButton>
                </Stack>
              </Box>
              <Box mt={3}>
                {/* <Button
									fullWidth
									className='transition-color ease duration-200 hover:text-slate-400 hover:bg-black h-[50px] bg-black text-white rounded-none shadow-[2px_2px_rgba(255,255,255,1),3px_3px_rgba(0,0,0,1)] flex justify-between px-3'
									endIcon={
										<ShortcutIcon fontSize='inherit' />
									}>
									Thêm vào giỏ hàng
								</Button> */}
                <BlackButton title="Thêm vào giỏ hàng" />
              </Box>
              <Box
                mt={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AirportShuttleOutlinedIcon />
                <Typography
                  sx={{
                    marginLeft: 2,
                    textTransform: "uppercase",
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  QUAY LẠI DỄ DÀNG
                </Typography>
              </Box>
              <Box
                mt={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SyncOutlinedIcon />
                <Typography
                  sx={{
                    marginLeft: 2,
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  Không đúng kích cỡ hoặc màu sắc? Vui lòng truy cập trang Trả
                  lại hàng & Hoàn tiền của chúng tôi để biết chi tiết
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* </Box> */}
    </Container>
  );
};

export default ProductDetail;
