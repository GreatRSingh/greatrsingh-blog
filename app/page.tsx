import { headers } from "next/headers";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { aggregate } from "./lib/actions/aggregate";

const HomePage = async () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  
  aggregate('home');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {postPreviews}
      </div>
  );
};

export default HomePage;
