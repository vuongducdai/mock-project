import publicRequest from './requestMethod'

export const getProducts = () => {
    return publicRequest.get(`/product`)
};

export const getUsers = () => {
    return publicRequest.get(`/user`)
};


