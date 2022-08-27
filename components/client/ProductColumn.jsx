import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, img, name, price, className }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={className + " flex cursor-pointer"}>
        <div className="pr-1">
          <Image src={img} alt={name} width={90} height={90} layout="fixed" />
        </div>
        <div className="text-ellipsis">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
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
        className="m-[5px]"
      />
    ));
  return (
    <div className="flex flex-col p-[5px]">
      <p className="font-bold">SẢN PHẨM</p>
      {productListJSX}
    </div>
  );
};
