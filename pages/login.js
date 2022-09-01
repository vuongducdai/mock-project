import { ClassNames } from "@emotion/react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Link,
  makeStyles,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
// import withStyles from "@mui/styles";
import { useRouter } from "next/router";
import { default as React, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Google from "../components/auth/Google";
import MainLayout from "../components/layout/main";
import { useAuth } from "../hooks/useAuth";
import { updateUserFromLogin } from "../redux/admin/userSlice";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const StyledTextField = styled(TextField)({
  "& .MuiFormHelperText-root.Mui-error": {
    color: "red",
  },

  "& .Mui-error": {
    color: "black",
  },
  "& .MuiOutlinedInput-root.Mui-error": {
    "& fieldset": {
      borderColor: "rgb(118,118,119)",
      borderBottomColor: "red",
      borderBottomWidth: "2px",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(118,118,119)",
      borderRadius: "0",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& fieldset": {
      borderWidth: "1px",
    },
  },
});

const InputField = ({ control, errors, name }) => {
  return (
    <Controller
      render={({ field }) => (
        <StyledTextField
          id="outlined-username-input"
          label="User name"
          type="text"
          error={errors?.name}
          helperText={errors.name?.message ? errors.name?.message : " "}
          {...field}
          sx={{ marginTop: "5px", marginBottom: "20px" }}
        />
      )}
      name={name}
      control={control}
    />
  );
};

const PasswordInputField = ({ control, errors }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end">
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        <Typography onClick={handleClickShowPassword} marginLeft="5px">
          {showPassword ? "HIDE" : "SHOW"}
        </Typography>
      </Stack>
      <Controller
        render={({ field }) => (
          <StyledTextField
            id="outlined-password-input"
            label="Password"
            type={showPassword ? "text" : "password"}
            error={errors?.password}
            helperText={
              errors.password?.message ? errors.password?.message : " "
            }
            {...field}
          />
        )}
        name="password"
        control={control}
      />
    </Stack>
  );
};

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
    <div>
      <form onSubmit={handleSubmit(handleLoginClick)} className="flex flex-col">
        <Stack>
          <InputField control={control} errors={errors} name="name" />
          <PasswordInputField control={control} errors={errors} />
        </Stack>

        <div>
          <input type="checkbox" id="keepLogin" name="keepLogin" />
          <label htmlFor="keepLogin">Giữ đăng nhập cho tôi</label>
        </div>
        <button type="submit" onSubmit={handleLoginClick}>
          Submit
        </button>
      </form>
      {/* <button onClick={handleLoginClick}>Login</button> */}
      <button onClick={handleLogoutClick}>Logout</button>

      <button onClick={handleGetUser}>Get User</button>

      <button onClick={handleGetCart}>Get Cart</button>

      <p>Profile: {JSON.stringify(user || {}, null, 4)}</p>
    </div>
  );
};

const FacebookGoogleLogin = () => {
  return (
    <div className="flex flex-col">
      <div>
        <button className="border">FACEBOOK</button>
      </div>
      <div>
        <Google />
      </div>
    </div>
  );
};

const LoginSection = () => {
  return (
    <Stack justifyContent="center" alignItems="flex-start">
      <Box width="100%" paddingX={"10px"}>
        <Typography variant="h3" fontWeight={"bold"}>
          ĐĂNG NHẬP
        </Typography>
        <Link color={"text.primary"} href="#" variant="body1">
          Bạn quên mật khẩu?
        </Link>
        <Box marginTop={"10px"}>
          <LoginForm />
        </Box>

        <Typography variant="body1">HOẶC</Typography>
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
    <Stack justfityContent="center" alignItems="center">
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
