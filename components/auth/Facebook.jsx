import { useRouter } from 'next/router';
import React from 'react'
import ReactFacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { facebookLogin } from '../../redux/admin/userSlice';

export default function Facebook() {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleResponeFacebook = (res) => {
        const { id, ...rest } = res;
        const info = {
            _id: id,
            ...rest
        }
        try {
            dispatch(facebookLogin(info));
            router.push("/");
        }
        catch (error) {
            consolele.log(err);
        }
    }

    return (

        <ReactFacebookLogin
            onFailure={() => alert('tht bai')}
            version="3.1"
            appId="487831592788394"
            autoLoad={false}
            fields='name, email, picture'
            callback={handleResponeFacebook}
            sx={{ border: 1 }}
        />
    )
}
