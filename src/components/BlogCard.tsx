import Markdown from "react-markdown";
import { Post } from "../interfaces/Post";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ post }: { post: Post }) => {
  const navigate = useNavigate();

  const goToBlogPost = () => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <div
      className='w-full rounded overflow-hidden shadow-lg bg-white transition-all hover:cursor-pointer hover:-translate-y-1 border-2 hover:border-2 border-white hover:border-upMaroon'
      onClick={goToBlogPost}
    >
      <img
        src={post?.["jetpack_featured_media_url"]}
        className='w-full h-auto z-20'
      />
      <div className='p-4'>
        <h2 className='font-recoletaBl text-lg'>
          <Markdown>{post.title.rendered}</Markdown>
        </h2>
        <p className='pt-2 font-openSans text-sm text-gray'>
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p
          className='pt-2 font-openSans text-base text-black'
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </div>
    </div>
  );
};
