import getPostMetadata from "../components/getPostMetadata";
import { Home } from "../components/Home";
import PostPreview from "../components/PostPreview";

const HomePage = async () => {
  const postMetadata = getPostMetadata();

  return (
    <>
      <Home postMetadata = {postMetadata}/>
      </>
  );
};

export default HomePage;
