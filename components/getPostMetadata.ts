import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  let markdownPosts = files.filter((file) => file.endsWith(".md"));


  function sortByDate(dateStrings: string[]): string[] {
    return dateStrings.sort((a, b) => {
        const dateA = new Date(a.split('.')[0]);
        const dateB = new Date(b.split('.')[0]);
        return dateB.getTime() - dateA.getTime();
    });
}
  markdownPosts = sortByDate(markdownPosts)

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
