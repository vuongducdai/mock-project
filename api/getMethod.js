import {publicRequest} from './requestMethod'

export const getData = () => {
    return publicRequest.get('/admin')
}