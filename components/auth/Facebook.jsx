import React from 'react'
import ReactFacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookLogin } from '../../redux/admin/userSlice';

export default function Facebook() {
    const dispatch = useDispatch()

    const handleClickFacebook = () => {
        console.log("clicked")
    }

    const handleResponeFacebook = (res) => {
        const { name, email, picture, accessToken } = res;
        console.log("res face", name, email, picture, accessToken);
        dispatch(facebookLogin(name, email, picture, accessToken));
    }

    return (
        <ReactFacebookLogin appId="756969712084319" autoLoad={true} fields='name, email, picture' onClick={handleClickFacebook} callback={handleResponeFacebook} />
    )
}
