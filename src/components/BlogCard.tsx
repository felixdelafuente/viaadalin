// import axios from "axios";
// import React, { useEffect, useState } from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import { Post } from '../interfaces/Post';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({ post }: { post: Post }) => {
  const [featuredImage, setFeaturedimage] = useState();
  const navigate = useNavigate();

  const getImage = () => {
    axios.get(post?._links["wp:featuredmedia"][0]?.href).then((response) => {
      setFeaturedimage(response.data.source_url);
    });
  };

  const goToBlogPost = () => {
    navigate(`/blog/${post.id}`, { state: { post } });
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div
      className='w-full md:w-1/2 lg:w-1/4 rounded overflow-hidden shadow-lg bg-white transition-all hover:cursor-pointer hover:-translate-y-1 border-2 hover:border-2 border-white hover:border-upMaroon'
      onClick={goToBlogPost}
    >
      <img src={featuredImage} className='w-full h-auto' />
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
