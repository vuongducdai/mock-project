import { useEffect } from "react";
import Image from "next/image";
import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema, userSchema } from "../../yupGlobal";
import { Box } from "@mui/system";
import {
      FormControl,
      FormControlLabel,
      InputLabel,
      MenuItem,
      Radio,
      RadioGroup,
      Select,
} from "@mui/material";
import { arrCatProduct, colors, sizes, unk } from "./../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData, closeToolbar } from "../../redux/admin/toolbarSlice";
import { createProduct, updateProduct } from "../../redux/admin/productSlice";
import { createUser, updateUser } from "../../redux/admin/userSlice";

const Newitem = ({ isOpen, type, isEdit }) => {
      const { formData } = useSelector((state) => state.toolbarSlice);
      const [img, setImg] = useState(unk);
      const [color, setColor] = useState("1");
      const [size, setSize] = useState(104);
      const [cat, setCat] = useState("material 1");
      const [isAdmin, setIsAdmin] = useState(false);
      const dispatch = useDispatch();

      const {
            register: userRegister,
            handleSubmit: userHandleSubmit,
            setValue: userSetValue,
            formState: { errors: userError },
      } = useForm({
            resolver: yupResolver(userSchema),
      });

      const {
            register: productRegister,
            handleSubmit: productHandleSubmit,
            setValue: productSetValue,
            formState: { errors: productError },
      } = useForm({
            resolver: yupResolver(productSchema),
      });

      useEffect(() => {
            if (formData && type === "product") {
                  setImg(formData.img);
                  productSetValue("name", formData.name);
                  productSetValue("price", formData.price);
                  productSetValue("quantity", formData.quantity);
                  setColor(formData.color);
                  setSize(formData.size);
                  setCat(formData.cat);
            } else if (formData && type === "user") {
                  userSetValue("name", formData.name);
                  userSetValue("address", formData.address);
                  userSetValue("phone", formData.phone);
                  userSetValue("email", formData.email);
                  setIsAdmin(formData.isAdmin);
            }
      }, [formData, isEdit, type]);

      const handleChangeColor = (event) => {
            setColor(event.target.value);
      };

      const controlProps = (item) => ({
            checked: color == item,
            onChange: handleChangeColor,
            value: item,
            name: "color-radio-button-demo",
            inputProps: { "aria-label": item },
      });

      const renderColors = () => {
            return (
                  <>
                        {colors.map((x) => (
                              <Radio
                                    key={x.id}
                                    {...controlProps(x.id)}
                                    sx={{
                                          color: x.color[800],
                                          "&.Mui-checked": {
                                                color: x.color[600],
                                          },
                                    }}
                              />
                        ))}
                  </>
            );
      };

      const renderCategories = () => {
            return (
                  <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                              <InputLabel className="bg-white w-20">Categories</InputLabel>
                              <Select
                                    value={cat}
                                    label="Cat"
                                    onChange={(e) => setCat(e.target.value)}
                              >
                                    {arrCatProduct.map((item) => (
                                          <MenuItem key={item.id} value={item.id}>
                                                {item.content}
                                          </MenuItem>
                                    ))}
                              </Select>
                        </FormControl>
                  </Box>
            );
      };

      const renderSizes = () => {
            return (
                  <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                              <InputLabel>Size</InputLabel>
                              <Select
                                    value={size}
                                    label="Size"
                                    onChange={(e) => setSize(e.target.value)}
                              >
                                    {sizes.map((item) => (
                                          <MenuItem key={item.id} value={item.size}>
                                                {item.size}
                                          </MenuItem>
                                    ))}
                              </Select>
                        </FormControl>
                  </Box>
            );
      };

      const onSubmit = async (data) => {
            if (type === "product") {
                  const productForm = { ...data, color, size, cat, img };
                  if (isEdit && formData) {
                        dispatch(updateProduct({ form: productForm, id: formData._id }));
                        dispatch(clearFormData());
                  } else {
                        dispatch(createProduct(productForm));
                        console.log(productForm);
                  }
                  productSetValue("name", "");
                  productSetValue("price", "");
                  setColor("1");
                  setSize("");
                  setImg("");
            } else {
                  const userForm = { ...data, isAdmin };
                  if (isEdit && formData) {
                        dispatch(updateUser({ form: userForm, id: formData._id }));
                        dispatch(clearFormData());
                  } else {
                        dispatch(createUser(userForm));
                  }
                  userSetValue("name", "");
                  userSetValue("address", "");
                  userSetValue("phone", "");
                  userSetValue("email", "");
            }
            dispatch(closeToolbar());
      };

      return (
            <div className="w-[240px] slide-left h-100vh bg-white shadow-md py-6 gap-6 mr-[-100px] ml-[100px]">
                  <div className="flex flex-col">
                        <div className="flex-center capitalize px-4">
                              <h3 className="text-2xl font-semibold text-[#333]">
                                    {isEdit ? "Update" : "Add"} {type}
                              </h3>
                        </div>

                        <form
                              className="px-4 h-full flex flex-col gap-4"
                              onSubmit={
                                    type === "product"
                                          ? productHandleSubmit(onSubmit)
                                          : userHandleSubmit(onSubmit)
                              }
                        >
                              {type === "product" && (
                                    <div className="form__container__filebase64 flex flex-col py-4 border-b border-[#ddd]">
                                          <FileBase64
                                                type="file"
                                                multiple={false}
                                                onDone={(file) => {
                                                      setImg(file.base64);
                                                }}
                                          />
                                          <div className="w-full h-40 py-4 overflow-hidden">
                                                <Image
                                                      src={img || unk}
                                                      alt="imga"
                                                      width={240}
                                                      height={160}
                                                      layout="responsive"
                                                      objectFit="cover"
                                                      className="rounded-lg"
                                                />
                                          </div>
                                    </div>
                              )}
                              <div className="flex flex-col">
                                    {type === "product" && (
                                          <>
                                                <span className="text-blue-pastel text-base font-semibold">
                                                      Product name
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...productRegister("name")}
                                                            defaultValue=""
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {productError.name?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Product price
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...productRegister("price")}
                                                            type="number"
                                                            defaultValue=""
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {productError.price?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Product quantity
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            onChange={(e) => setQuantity(e.target.value)}
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...productRegister("quantity")}
                                                            type="number"
                                                            defaultValue={100}
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {productError.price?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold mb-4">
                                                      Product size
                                                </span>
                                                {renderSizes()}

                                                <span className="mt-4 text-blue-pastel text-base font-semibold mb-4">
                                                      Product categories
                                                </span>
                                                {renderCategories()}

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Product color
                                                </span>
                                                <div className="py-2 h-20 flex flex-wrap gap-2">
                                                      {renderColors()}
                                                </div>
                                          </>
                                    )}

                                    {type === "user" && (
                                          <>
                                                <span className="text-blue-pastel text-base font-semibold">
                                                      Name
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...userRegister("name")}
                                                            defaultValue=""
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {userError.name?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Password
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...userRegister("password")}
                                                            defaultValue=""
                                                            type="password"
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {userError.password?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Email
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...userRegister("email")}
                                                            type="text"
                                                            defaultValue=""
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {userError.email?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Address
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...userRegister("address")}
                                                            type="text"
                                                            defaultValue=""
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {userError.address?.message}
                                                </p>

                                                <span className="mt-4 text-blue-pastel text-base font-semibold">
                                                      Phone
                                                </span>
                                                <div className="px-4 py-2 rounded-3xl bg-fb font-sans font-base">
                                                      <input
                                                            className="text-[#333] outline-none bg-fb"
                                                            {...userRegister("phone")}
                                                            type="string"
                                                            defaultValue=""
                                                      />
                                                </div>
                                                <p className="text-warning text-sm">
                                                      {userError.phone?.message}
                                                </p>
                                                <div className="py-4">
                                                      <FormControl>
                                                            <span className="text-[#333] text-base font-semibold">
                                                                  Admin
                                                            </span>
                                                            <RadioGroup
                                                                  name="controlled-radio-buttons-group"
                                                                  value={isAdmin}
                                                                  onChange={(e) => setIsAdmin(e.target.value)}
                                                            >
                                                                  <FormControlLabel
                                                                        value={true}
                                                                        control={<Radio />}
                                                                        label="True"
                                                                        defaultChecked={isAdmin === true}
                                                                        default
                                                                  />
                                                                  <FormControlLabel
                                                                        value={false}
                                                                        control={<Radio />}
                                                                        label="False"
                                                                        defaultChecked={isAdmin === false}
                                                                  />
                                                            </RadioGroup>
                                                      </FormControl>
                                                </div>
                                          </>
                                    )}
                              </div>

                              <div className="flex items-center gap-4 justify-between">
                                    <input
                                          className="text-blue-pastel px-4 py-2 rounded-lg border text-lg cursor-pointer w-24 flex-center"
                                          type="submit"
                                    />
                                    <button
                                          onClick={() => dispatch(closeToolbar())}
                                          className="text-blue-pastel px-4 py-2 rounded-lg border text-lg cursor-pointer w-24 flex-center"
                                    >
                                          Discard
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Newitem;
