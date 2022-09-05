import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from "@mui/material";
// import withStyles from "@mui/styles";
import { useRouter } from "next/router";
import { default as React, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import GoogleButton from "../components/auth/Google";
import BlackButton from "../components/BlackButton";
import MainLayout from "../components/layout/main";
import { useAuth } from "../hooks/useAuth";
import { updateUserFromLogin } from "../redux/admin/userSlice";

import Image from "next/image";
import { Auth } from "../components/auth/Auth";
import {
  CheckedIconTypography,
  FacebookButton,
  InputField,
  PasswordInputField,
} from "../components/utilities";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const LoginDialog = ({ isLoggedIn, open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isLoggedIn
            ? "Đăng nhập thành công"
            : "Sai tên đăng nhập hoặc mật khẩu"}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Đóng</Button>
      </DialogActions>
    </Dialog>
  );
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const { login } = useAuth();
  const dispatch = useDispatch();

  async function handleLoginClick({ name, password }) {
    console.log(name, password);
    try {
      setIsLoading(true);
      const res = await login({ name, password });
      // const res = await axiosClient.post("/login", { name, password });
      // const res = await postLogin({ name, password });
      console.log(res);
      dispatch(updateUserFromLogin(res.data));
      setOpenDialog(true);
      setIsLoggedIn(true);
      router.push("/");
    } catch (error) {
      console.log("failed to login", error);
      setOpenDialog(true);
      setIsLoggedIn(false);
    }
  }

  const handleClose = () => {
    setOpenDialog(false);
    setIsLoading(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  console.log("Errors", errors);

  return (
    <Box>
      <form onSubmit={handleSubmit(handleLoginClick)} className="flex flex-col">
        <Stack>
          <InputField
            control={control}
            errors={errors}
            name="name"
            placeholder="Tên đăng nhập *"
          />
          <PasswordInputField
            control={control}
            errors={errors}
            placeholder="Mật khẩu *"
          />
        </Stack>
        <Box marginY="10px">
          <BlackButton
            onSubmit={handleLoginClick}
            title="ĐĂNG NHẬP"
            className="w-[auto]"
            isLoading={isLoading}
          />
        </Box>
      </form>
      <LoginDialog
        isLoggedIn={isLoggedin}
        open={openDialog}
        handleClose={handleClose}
      />
    </Box>
  );
};

const FacebookGoogleLogin = () => {
  return (
    <Stack>
      <Box marginY="5px">
        <FacebookButton />
      </Box>
      {/* <Box marginY="5px">
        <GoogleButton />
      </Box> */}
    </Stack>
  );
};

const LoginSection = () => {
  return (
    <Stack justifyContent="center" alignItems="flex-start">
      <Box width="100%" paddingRight={"70px"}>
        <Typography variant="h3" fontWeight={"semi-bold"} paddingBottom="5px">
          ĐĂNG NHẬP
        </Typography>
        <Link color={"text.primary"} href="#" variant="body1">
          Bạn quên mật khẩu?
        </Link>
        <Box marginTop={"15px"}>
          <LoginForm />
        </Box>
        <Typography variant="body1" paddingY="10px">
          HOẶC
        </Typography>
        <FacebookGoogleLogin />
      </Box>
    </Stack>
  );
};

const SignUpSection = () => {
  const signUpText = [
    "Miễn phí giao hàng",
    "Voucher giảm giá 15% cho lần mua hàng tiếp theo",
    "Truy cập các sản phẩm và đợt giảm giá Dành Riêng Cho Hội Viên",
    "Ưu đãi và khuyến mãi đặc biệt",
  ];

  const signUpTextJSX = signUpText.map((item, index) => (
    <CheckedIconTypography text={item} key={item + index} />
  ));

  return (
    <Stack>
      <Typography variant="h3" fontWeight={"semi-bold"} paddingBottom="5px">
        GIA NHẬP ADICLUB. NHẬN THƯỞNG NGAY HÔM NAY.
      </Typography>
      <Typography>
        Là một hội viên adiClub, bạn sẽ được hưởng lợi với những gì bạn yêu
        thích khi làm điều mình thích. Đăng ký ngay hôm nay và hưởng quyền lợi
        từ Hạng 1:
      </Typography>
      <Stack paddingY="10px">{signUpTextJSX}</Stack>
      <Typography>
        Tham gia ngay để bắt đầu tích điểm, thăng hạng và mở khoá thêm phần
        thưởng và quyền lợi từ adiClub.
      </Typography>
      <Box paddingY="10px">
        <BlackButton title="GIA NHẬP CÂU LẠC BỘ" />
      </Box>
      <Stack width="100%" height="200px" position="relative">
        <Typography>Test </Typography>
        <Image
          src="https://www.adidas.com.vn/glass/react/a2fa20f/assets/img/adiClub-account-register.jpeg"
          alt="sign up image"
          layout="fill"
        />
      </Stack>
    </Stack>
  );
};

const LoginPage = () => {
  return (
    <Auth>
      <Stack justifyContent="center" alignItems="center" marginY="15px">
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          direction="row"
          width="65%"
        >
          <Box flexBasis={0} flexGrow={1}>
            <LoginSection />
          </Box>

          <Box flexBasis={0} flexGrow={1}>
            <SignUpSection />
          </Box>
        </Stack>
      </Stack>
    </Auth>
  );
};

LoginPage.Layout = MainLayout;
LoginPage.isPublic = false;

export default LoginPage;
