import { WhiteButton } from '@/components/utilities';
import { googleLogin } from '@/redux/admin/userSlice';
import GoogleIcon from '@mui/icons-material/Google';
import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

const Google = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    const result = response.profileObj;
    const token = response.tokenId;
    try {
      dispatch(googleLogin(result));
      router.push('/');
    } catch (error) {}
  };

  return (
    <>
      <GoogleLogin
        clientId="388199177066-o1jglvjrvnqvtiipadurfa24369q59ht.apps.googleusercontent.com"
        buttonText="Login"
        render={(renderProps) => (
          <WhiteButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            // className="w-[200px] border-solid"
            variant="outlined"
            sx={{ borderRadius: '0', width: '50%' }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              width="100%"
              paddingY="10px"
              paddingX="5px"
            >
              <Typography fontWeight="medium">GOOGLE</Typography>
              <GoogleIcon />
            </Stack>
          </WhiteButton>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        className="p-0"
      />
    </>
  );
};

export default Google;
