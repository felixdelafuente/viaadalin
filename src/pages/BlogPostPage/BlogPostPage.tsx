import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BlogPostPage = () => {
  const [featuredImage, setFeaturedimage] = useState();

  const location = useLocation();
  const post = location.state.post;

  const getImage = () => {
    console.log(post);
    axios.get(post?._links["wp:featuredmedia"][0]?.href).then((response) => {
      setFeaturedimage(response.data.source_url);
    });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <section className='z-20 pt-14 w-full px-4 md:px-16 lg:px-32 flex flex-col justify-center'>
      <img
        src={featuredImage}
        className='w-screen h-1/2 object-cover object-center'
      />
      <h1 className='font-recoletaBl text-5xl text-center text-black mt-16'>
        {post.title.rendered}
      </h1>
      <p
        className='mt-16 font-openSans text-base'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </section>
  );
};
