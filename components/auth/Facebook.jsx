import { useRouter } from 'next/router';
import React from 'react'
import ReactFacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookLogin } from '../../redux/admin/userSlice';

export default function Facebook() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClickFacebook = () => {
        console.log("clicked")
    }

    const handleResponeFacebook = (res) => {
        const { name, email, picture, accessToken } = res;
        try {
            console.log("res face", res.status);
            dispatch(facebookLogin(res));
            router.push("/");
        }
        catch (error) {
            consolele.log(err);
        }
    }

    return (
        <ReactFacebookLogin version="3.1" appId="756969712084319" autoLoad={true} fields='name, email, picture' onClick={handleClickFacebook} callback={handleResponeFacebook} />
    )
}
