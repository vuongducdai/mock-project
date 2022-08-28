import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BlackButton from "../BlackButton";
import { Box, Stack, Typography } from "@mui/material";

const LegalFooter = () => {
  return (
    <Stack bgcolor={"#363738"} color={"#c8cbcc"}>
      <Stack justifyContent={"center"} alignItems={"center"} direction="row">
        <Typography px={"15px"} my={"9px"} borderRight={1} variant="caption">
          Chính sách Bảo mật
        </Typography>
        <Typography px={"15px"} my={"9px"} borderRight={1} variant="caption">
          Điều Khoản và Điều Kiện
        </Typography>
        <Typography px={"15px"} my={"9px"} borderRight={1} variant="caption">
          XUẤT BẢN BỞI
        </Typography>
        <Typography px={"15px"} my={"9px"} variant="caption">
          © 2020 Công ty TNHH adidas Việt Nam
        </Typography>
      </Stack>
    </Stack>
  );
};

const FooterStack = ({ children }) => {
  return (
    <Stack mx={"15px"} mt={"20px"} mb={"30px"} flexBasis={0} flexGrow={1}>
      {children}
    </Stack>
  );
};

const FooterColumn = ({ title, items }) => {
  return (
    <FooterStack>
      <Typography variant="h6" mb={"10px"}>
        {title}
      </Typography>
      {items}
    </FooterStack>
  );
};

const AboutUsFooter = () => {
  const productsFooter = [
    "Giày",
    "Quần áo",
    "Phụ kiện",
    "Hàng mới về",
    "Release Dates",
    "adidas Exclusive",
    "Outlet",
  ].map((item, index) => (
    <Typography variant="overline" key={(item, index)}>
      {item}
    </Typography>
  ));

  const sportsFooter = [
    "Chạy",
    "Đánh gôn",
    "Tập Luyện",
    "Bóng đá",
    "Bóng Rổ",
    "Quần vợt",
    "Ngoài trời",
    "Bơi lội",
  ].map((item, index) => (
    <Typography variant="overline" key={(item, index)}>
      {item}
    </Typography>
  ));

  const bstFooter = [
    "IVY PARK",
    "Giày adidas Pharrell Williams",
    "Giày Ultra Boost",
    "Giày Pureboost",
    "Predator",
    "X",
    "Copa",
    "Continental 80",
    "Giày Superstar",
    "Giày Stan Smith",
    "nmd",
    "ZX",
  ].map((item, index) => (
    <Typography variant="overline" key={(item, index)}>
      {item}
    </Typography>
  ));

  const supportFooter = [
    "Trợ Giúp Dịch Vụ Khách Hàng",
    "Công cụ tìm kiếm cửa hàng",
    "Biểu Đồ Kích Cỡ",
    "Thanh toán",
    "Giao hàng",
    "Trả Hàng & Hoàn Tiền",
    "khuyến mãi",
    "Sơ đồ trang web",
  ].map((item, index) => (
    <Typography variant="overline" key={(item, index)}>
      {item}
    </Typography>
  ));

  const aboutCompany = [
    "Giới Thiệu Về Chúng Tôi",
    "Cơ Hội Nghề Nghiệp",
    "Tin tức",
  ].map((item, index) => (
    <Typography variant="overline" key={(item, index)}>
      {item}
    </Typography>
  ));

  const socialMedia = [
    <FacebookIcon key="facebookIcon" />,
    <InstagramIcon key="instagramIcon" />,
    <TwitterIcon key="twitterIcon" />,
    <PinterestIcon key="pinterestIcon" />,
    <MusicNoteIcon key="tiktokIcon" />,
    <YouTubeIcon key="youtubeIcon" />,
  ];

  return (
    <Stack justifyContent="center" direction="row">
      <Stack justifyContent="center" direction="row" maxWidth="1010px">
        <FooterColumn title={"SẢN PHẨM"} items={productsFooter} />
        <FooterColumn title={"THỂ THAO"} items={sportsFooter} />
        <FooterColumn title={"BỘ SƯU TẬP"} items={bstFooter} />
        <FooterColumn title={"THÔNG TIN VỀ CÔNG TY"} items={aboutCompany} />
        <FooterColumn title={"HỖ TRỢ"} items={supportFooter} />
        <FooterColumn title={"THEO DÕI CHÚNG TÔI"} items={socialMedia} />
      </Stack>
    </Stack>
  );
};

const SubscribeFooter = () => {
  return (
    <Box bgcolor={"#ede734"} p={"40px"} minWidth={"960px"}>
      <Stack
        justifyContent="space-between"
        maxWidth={"960px"}
        mx={"auto"}
        direction="row"
      >
        <Box flexGrow={1} px={"7px"} className="basis-0">
          <Typography variant="h4">
            ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL
          </Typography>
        </Box>
        <Box flexGrow={1} className="basis-0">
          <BlackButton title="ĐĂNG KÝ NHẬN BẢN TIN" />
        </Box>
      </Stack>
    </Box>
  );
};

function Footer() {
  return (
    <Box varian="footer">
      <SubscribeFooter />
      <AboutUsFooter />
      <LegalFooter />
    </Box>
  );
}

export default Footer;
