import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { default as React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { postLogin } from '../api/requestMethod';
import Google from '../components/auth/Google';
import MainLayout from '../components/layout/main';
import { useAuth } from '../hooks/useAuth';
import { updateUserFromLogin } from '../redux/admin/userSlice';

const schema = yup.object({
	name: yup.string().required('Vui lòng nhập tên của bạn'),
	password: yup.string().required('Vui lòng nhập mật khẩu'),
});

const LoginForm = () => {
	const router = useRouter();
	const { data, login, logout, getUser, getCart } = useAuth();
	const { user } = useSelector(state => state.userSlice);
	const dispatch = useDispatch();

	// async function handleLoginClick({ name, password }) {
	// 	console.log(name, password);
	// 	try {
	// 		axiosClient.post('/login', { name, password }).then(res => {
	// 			dispatch(updateUserFromLogin(res.data));
	// 			console.log(res.data);
	// 		});

	// 		console.log('redirect to index');
	// 	} catch (error) {
	// 		console.log('failed to login', error);
	// 	}
	// }

	async function handleLoginClick({ name, password }) {
		console.log(name, password);
		try {
			const res = await postLogin({ name, password });
			dispatch(updateUserFromLogin(res.data));
		} catch (error) {
			console.log('failed to login', error);
		}
	}

	function handleLogoutClick() {
		dispatch(logout());
	}

	async function handleGetUser() {
		try {
			await getUser();
		} catch (error) {
			console.log('failed to get User', error);
		}
	}

	async function handleGetCart() {
		try {
			await getCart();
		} catch (error) {
			console.log('failed to get cart', error);
		}
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(schema),
	});

	return (
		<div>
			<form
				onSubmit={handleSubmit(handleLoginClick)}
				className='flex flex-col'>
				<input
					type='text'
					{...register('name')}
					placeholder='Name'
					style={{
						border: errors.email
							? '1px solid red'
							: '1px solid #ccd0d5',
					}}
				/>
				{errors?.name && <small>{errors.name?.message}</small>}

				<input
					type='password'
					{...register('password')}
					placeholder='Password'
					style={{
						border: errors.password
							? '1px solid red'
							: '1px solid #ccd0d5',
					}}
				/>
				{errors?.password && <small>{errors.password?.message}</small>}

				<div>
					<input type='checkbox' id='keepLogin' name='keepLogin' />
					<label htmlFor='keepLogin'>Giữ đăng nhập cho tôi</label>
				</div>
				<button type='submit' onSubmit={handleLoginClick}>
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
		<div className='flex flex-col'>
			<div>
				<button className='border'>FACEBOOK</button>
			</div>
			<div>
				<Google />
			</div>
		</div>
	);
};

const LoginSection = () => {
	return (
		<div className='flex justify-center items-start'>
			<div>
				<span className='text-5xl font-semibold'>ĐĂNG NHẬP</span>
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
			<span className='text-5xl font-semibold'>TẠO MỘT TÀI KHOẢN</span>
			<p>
				Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn
				và điền vào mẫu trên trang tiếp theo và tận hưởng những lợi ích
				của việc sở hữu một tài khoản.
			</p>
			<ul>
				<li>Tổng quan đơn giản về thông tin cá nhân của bạn</li>
				<li>Thanh toán nhanh hơn</li>
				<li>
					Một lần đăng nhập chung duy nhất để tương tác với các sản
					phẩm và dịch vụ của adidas
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
		<div className='mt-28 flex justify-center items-center  '>
			<div className='flex justify-center items-center w-[65%]'>
				<div className='basis-0 grow'>
					<LoginSection />
				</div>
				<div className='basis-0 grow'>
					<SignUpSection />
				</div>
			</div>
		</div>
	);
};

LoginPage.Layout = MainLayout;

export default LoginPage;
