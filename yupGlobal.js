import * as yup from 'yup';

export let productSchema = yup.object().shape({
      name: yup.string().required('Fill is required'),
      color: yup.string().required('Fill is required'),
      size: yup.number().positive('Size must be bigger than 0').integer('Size must be an integer'),
      price: yup.number().required('Fill is required').positive('Price must be bigger than 0').integer('Price must be an integer'),
});

export let userSchema = yup.object().shape({
      name: yup.string().required('Fill is required'),
      email: yup.string().email().required('Fill is required'),
      address: yup.string().required('Fill is required'),
      phone: yup.number().required('Fill is required'),
      isAdmin: yup.boolean().required('Fill is required')
});
