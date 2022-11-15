import axios from "axios";
export const fetchProducts = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );
  const products: Product[] = data.products;
  return products;
};
