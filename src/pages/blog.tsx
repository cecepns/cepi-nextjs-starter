import { AdminLayout } from "@layout";
import axios from "axios";

export type Props = {
  data: ApiResult;
}

export type ApiResult = {
  title?: string;
  userId?: number;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = res.data;

  // Pass data to the page via props
  return { props: { data } }
}

const Blog = ({data}:Props) => {
  return (
    <AdminLayout>
      <div>{data.userId}</div>
      <h1>{data.title}</h1>
    </AdminLayout>
 );
}

export default Blog;
