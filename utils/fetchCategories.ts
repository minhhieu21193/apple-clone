import axios from "axios";
export const fetchCategories = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
  );
  const categories: Category[] = data.categories;
  return categories;
};
