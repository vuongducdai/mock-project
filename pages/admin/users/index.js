import React, { useEffect, useState } from "react";
import DataTable from "../../../components/Admin/DataTable";

import { getUsersList } from "../../../redux/admin/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const { users } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
    

  }, []);

  return (
    <div>
      {users && <DataTable datas={users} type="USER" name='name' address='address' email='email' phone='phone' isAdmin='isAdmin'/>}
    </div>
  );
};

export default Product;
