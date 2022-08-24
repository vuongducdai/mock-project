import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const LegalFooter = () => {
  return (
    <div className="bg-[#363738] text-[#c8cbcc] text-[12px] h-[60px] flex items-center justify-center">
      <ol className="flex justify-center items-center ">
        <li className="px-[15px] my-[9px] border-r border-inherit">
          Chính sách Bảo mật{" "}
        </li>
        <li className="px-[15px] my-[9px] border-r border-inherit">
          Điều Khoản và Điều Kiện
        </li>
        <li className="px-[15px] my-[9px] border-r border-inherit ">
          XUẤT BẢN BỞI
        </li>
        <li className="px-[15px] my-[9px]">
          © 2020 Công ty TNHH adidas Việt Nam
        </li>
      </ol>
    </div>
  );
};

const AboutUsFooter = () => {
  const listItemStyle = "text-[13px] pt-[5px]";

  const productsFooter = [
    "Giày",
    "Quần áo",
    "Phụ kiện",
    "Hàng mới về",
    "Release Dates",
    "adidas Exclusive",
    "Outlet",
  ].map((item, index) => (
    <li className={listItemStyle} key={(item, index)}>
      {item}
    </li>
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
    <li className={listItemStyle} key={(item, index)}>
      {item}
    </li>
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
    <li className={listItemStyle} key={(item, index)}>
      {item}
    </li>
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
    <li className={listItemStyle} key={(item, index)}>
      {item}
    </li>
  ));

  const aboutCompany = [
    "Giới Thiệu Về Chúng Tôi",
    "Cơ Hội Nghề Nghiệp",
    "Tin tức",
  ].map((item, index) => (
    <li className={listItemStyle} key={(item, index)}>
      {item}
    </li>
  ));

  const titleFooterStyle = "text-[18px] font-medium mb-[10px]";
  const footerListStyle = "mx-[15px] mt-[20px] mb-[30px] basis-0 grow	";

  return (
    <div className="flex justify-center">
      <div className="flex justify-center max-w-[1010px]">
        <ul className={footerListStyle}>
          <li className={titleFooterStyle}>SẢN PHẨM</li>
          {productsFooter}
        </ul>
        <ul className={footerListStyle}>
          <li className={titleFooterStyle}>THỂ THAO</li>
          {sportsFooter}
        </ul>
        <ul className={footerListStyle}>
          <li className={titleFooterStyle}>BỘ SƯU TẬP</li>
          {bstFooter}
        </ul>
        <ul className={footerListStyle}>
          <li className={titleFooterStyle}>THÔNG TIN VỀ CÔNG TY</li>
          {aboutCompany}
        </ul>
        <ul className={footerListStyle}>
          <li className={titleFooterStyle}>HỖ TRỢ</li>
          {supportFooter}
        </ul>
        <ul className={footerListStyle}>
          <li className={titleFooterStyle}>THEO DÕI CHÚNG TÔI</li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
          <li>
            <MusicNoteIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

const SubscribeFooter = () => {
  const beforeAfterButtonStyle =
    "relative bg-black text-white p-4 " +
    "before:w-[100%] before:h-[3px] before:absolute before:-bottom-[3px] before:left-[3px] before:border-b before:border-l before:border-black " +
    "after:h-[100%] after:w-[3px] after:absolute after:top-[3px] after:-right-[3px] after:border-t after:border-r after:border-black";

  return (
    <div className="bg-[#ede734] px-[40px] py-[40px] min-w-[960px] w-[100%] mx-auto">
      <div className="flex">
        <div className="basis-0 grow ">
          <span className="text-3xl">
            ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL
          </span>
        </div>
        <div className="basis-0 grow h-[100px]">
          <button className={beforeAfterButtonStyle}>
            <div className="flex justify-between w-[100%]">
              <span>ĐĂNG KÝ NHẬN BẢN TIN</span>
              <span>
                <TrendingFlatIcon className="w-[100%]" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer>
      <SubscribeFooter />
      <AboutUsFooter />
      <LegalFooter />
    </footer>
  );
}

export default Footer;
