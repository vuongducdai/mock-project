import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import MainLayout from "../components/layout/main";

const schema = yup.object({
  email: yup
    .string()
    .email("Vui lòng nhập một địa chỉ email hợp lệ")
    .required("Vui lòng nhập một địa chỉ email hợp lệ"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col	">
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          style={{
            border: errors.email ? "1px solid red" : "1px solid #ccd0d5",
          }}
        />
        {errors?.email && <small>{errors.email?.message}</small>}

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          style={{
            border: errors.password ? "1px solid red" : "1px solid #ccd0d5",
          }}
        />
        {errors?.password && <small>{errors.password?.message}</small>}

        <div>
          <input type="checkbox" id="keepLogin" name="keepLogin" />
          <label htmlFor="keepLogin">Giữ đăng nhập cho tôi</label>
        </div>
        <input type="submit" />
      </form>
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
        <button className="border">GOOGLE</button>
      </div>
    </div>
  );
};

const LoginSection = () => {
  return (
    <div className="flex justify-center items-start">
      <div>
        <span className="text-5xl font-semibold">ĐĂNG NHẬP</span>
        <p>Bạn quên mật khẩu?</p>
        <LoginForm />
        <p>HOẶC</p>
        <FacebookGoogleLogin />
      </div>
    </div>
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
    <div className="mt-28 flex justify-center items-center  ">
      <div className="flex justify-center items-center w-[65%]">
        <div className="basis-0 grow">
          <LoginSection />
        </div>
        <div className="basis-0 grow">
          <SignUpSection />
        </div>
      </div>
    </div>
  );
};

LoginPage.Layout = MainLayout;

export default LoginPage;
