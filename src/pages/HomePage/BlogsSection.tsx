import axios from "axios";
import { useEffect, useState } from "react";
import { BlogCard } from "../../components/BlogCard";

export const BlogsSection = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Using axios to fetch the posts
    axios
      .get(
        "https://public-api.wordpress.com/wp/v2/sites/viaadalin1.wordpress.com/posts"
      )
      .then((res) => {
        // Saving the data to state
        setPosts(res.data);
      });
  };

  // Calling the function on page load
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className='w-full px-4 md:px-16 lg:px-32 py-16 lg:py-32 flex flex-col justify-center'>
      <h1 className='font-recoletaBl text-5xl text-center text-black mt-12'>
        My Blog Posts
      </h1>
      <div className='w-full mt-24 mb-12 flex flex-col md:flex-row md:justify-center gap-8'>
        {posts.slice(0, 4).map((item) => (
          <BlogCard post={item} />
        ))}
      </div>
      <div className='flex justify-center'>
        <a href='/blogs'>
          <button className='w-auto h-auto px-6 py-2 border-2 border-upMaroon rounded-full font-openSans font-bold text-sm text-upMaroon hover:bg-upMaroon hover:text-background'>
            See All
          </button>
        </a>
      </div>
    </section>
  );
};
