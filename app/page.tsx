import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import axios from "axios";

const HomePage = async () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const res = await axios.post(
    "https://sheetdb.io/api/v1/yuh384fc5uwmp",
    {
      data: [
        {
          id: "INCREMENT",
          "date-time": "DATETIME",
        },
      ],
      return_values: true,
    }
  );

  console.log(
    res.data
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export default HomePage;
