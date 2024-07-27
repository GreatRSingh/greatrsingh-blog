import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  let markdownPosts = files.filter((file) => file.endsWith(".md"));

  function sortByDate(fileName: string[]): string[] {
    return fileName.sort((a, b) => {
      const aContents = fs.readFileSync(`posts/${a}`, "utf8");
      const aMatter = matter(aContents);
      const bContents = fs.readFileSync(`posts/${b}`, "utf8");
      const bMatter = matter(bContents);
      const dateA = new Date(aMatter.data.date);
      const dateB = new Date(bMatter.data.date);
      return dateB.getTime() - dateA.getTime();
    });
  } 

  markdownPosts = sortByDate(markdownPosts);

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
