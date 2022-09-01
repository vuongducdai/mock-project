import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Link, Stack, Typography } from "@mui/material";
// import withStyles from "@mui/styles";
import { useRouter } from "next/router";
import { default as React } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import GoogleButton from "../components/auth/Google";
import MainLayout from "../components/layout/main";
import { useAuth } from "../hooks/useAuth";
import { updateUserFromLogin } from "../redux/admin/userSlice";
import BlackButton from "../components/BlackButton";

import {
  CheckedIconTypography,
  FacebookButton,
  InputField,
  PasswordInputField,
} from "../components/utilities";
import Image from "next/image";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const LoginForm = () => {
  const router = useRouter();
  const { data, login, logout, getUser, getCart } = useAuth();
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  async function handleLoginClick({ name, password }) {
    console.log(name, password);
    try {
      const res = await login({ name, password });
      // const res = await axiosClient.post("/login", { name, password });
      // const res = await postLogin({ name, password });
      console.log(res);
      dispatch(updateUserFromLogin(res.data));
    } catch (error) {
      console.log("failed to login", error);
    }
  }

  function handleLogoutClick() {
    dispatch(logout());
  }

  async function handleGetUser() {
    try {
      await getUser();
    } catch (error) {
      console.log("failed to get User", error);
    }
  }

  async function handleGetCart() {
    try {
      await getCart();
    } catch (error) {
      console.log("failed to get cart", error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
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
          />
        </Box>
      </form>
    </Box>
  );
};

const FacebookGoogleLogin = () => {
  return (
    <Stack>
      <Box marginY="5px">
        <FacebookButton />
      </Box>
      <Box marginY="5px">
        <GoogleButton />
      </Box>
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
    <Stack justfityContent="center" alignItems="center" marginBottom="15px">
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
  );
};

LoginPage.Layout = MainLayout;

export default LoginPage;
