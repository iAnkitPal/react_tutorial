import { useLoaderData } from "react-router-dom";

export function Github(params) {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}
