import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, img, name, price }) => {
  return (
    <Link href={`/products/${id}`}>
      <Stack direction="row" m={"5px"} className={"cursor-pointer"}>
        <Box pr={1}>
          <Image src={img} alt={name} width={90} height={90} layout="fixed" />
        </Box>
        <Box>
          <Box width={150}>
            <Typography noWrap="true" align="left">
              {name}
            </Typography>
          </Box>
          <Typography align="left">{price}</Typography>
        </Box>
      </Stack>
    </Link>
  );
};

export const ProductColumn = ({ productList }) => {
  const productListJSX = productList
    .slice(0, 4)
    .map((item, index) => (
      <ProductCard
        id={item.id}
        key={item.name + index}
        img={item.img}
        name={item.name}
        price={item.price}
      />
    ));
  return (
    <Stack p={"5px"}>
      <Typography variant="h6" align="left">
        SẢN PHẨM
      </Typography>
      {productListJSX}
    </Stack>
  );
};
