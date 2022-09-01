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
  FacebookButton,
  InputField,
  PasswordInputField,
} from "../components/utilities";

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
  return (
    <div>
      <span className="text-5xl font-semibold">TẠO MỘT TÀI KHOẢN</span>
      <p>
        Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn và điền
        vào mẫu trên trang tiếp theo và tận hưởng những lợi ích của việc sở hữu
        một tài khoản.
      </p>
      <ul>
        <li>Tổng quan đơn giản về thông tin cá nhân của bạn</li>
        <li>Thanh toán nhanh hơn</li>
        <li>
          Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và dịch
          vụ của adidas
        </li>
        <li>Ưu đãi và khuyến mãi độc quyền</li>
        <li>Các sản phẩm mới nhất</li>
        <li>Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới</li>
        <li>Các sự kiện sắp tới</li>
      </ul>
    </div>
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
