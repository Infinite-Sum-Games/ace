'use client';

import React, { useState, useEffect } from 'react'

import Navbar from '@/_components/Navbar';
import Link from 'next/link';


const blogs = [
  {
    id: "1",
    title: "First Blog Post",
    description: "Introduction to our blog.",
    imageUrl: "https://picsum.photos/200/300.jpg",
    author: "John Doe",
    publishedOn: "2024-10-01",
  },
  {
    id: "2",
    title: "Second Blog Post",
    description: "In-depth analysis on a trending topic.",
    imageUrl: "https://picsum.photos/200/300.jpg",
    author: "Jane Smith",
    publishedOn: "2024-09-20",
  },
  {
    id: "3",
    title: "Third Blog Post",
    description: "A look into the future of technology.",
    imageUrl: "https://picsum.photos/200/300.jpg",
    author: "Alice Johnson",
    publishedOn: "2024-08-15",
  },
  {
    id: "4",
    title: "Fourth Blog Post",
    description: "How to start your coding journey.",
    imageUrl: "https://picsum.photos/200/300.jpg",
    author: "Mark Lee",
    publishedOn: "2024-07-30",
  },
  {
    id: "5",
    title: "Fifth Blog Post",
    description: "How to start your coding journey.",
    imageUrl: "https://picsum.photos/200/300.jpg",
    author: "Mark Lee",
    publishedOn: "2024-06-15",
  },
];


function Blog() {
  const [firstBlog, ...otherBlogs] = blogs;

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-20 flex justify-center items-center z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="pt-24 bg-gradient-to-br from-black via-black to-orange-900 text-white px-4 md:px-10 py-10">
        {/* Page Heading */}
        <h2 className="text-5xl text-center font-bold mb-10 font-extrabold bg-gradient-to-b from-orange-500 via-orange-600 to-black bg-clip-text text-transparent">
          Latest Blogs
        </h2>

        {/* First Blog Card (Full width) */}
        <div className="flex justify-center items-center rounded-lg overflow-hidden md:col-span-3 h-[50vh] w-2/3 max-w-5xl mx-auto p-6 bg-black mb-10 ">
          <Link href={`/blog/${firstBlog.id}`} legacyBehavior>
            <a className="flex items-center justify-center w-full gap-6">
              {/* Text Section */}
              <div className="flex flex-col justify-center w-2/3">
                <h3 className="text-3xl font-bold mb-4 text-white hover:text-orange-500 transition">{firstBlog.title}</h3>

                <p className="mb-4 text-white">{firstBlog.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <p>By {firstBlog.author}</p>
                  <p>{new Date(firstBlog.publishedOn).toLocaleDateString()}</p>
                </div>
                <span className="text-orange-500">Read more...</span>
              </div>

              {/* Image Section */}
              <div className="w-1/3 flex justify-end rounded-xl">
                <img
                  className="w-[400px] h-[300px]  rounded-lg"
                  src={firstBlog.imageUrl}
                  alt={firstBlog.title}
                />
              </div>
            </a>
          </Link>
        </div>

        {/* Smaller Blog Cards Grid */}
        <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center ">
          {otherBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col  w-[350px] h-[450px] rounded-lg overflow-hidden bg-black transition-transform duration-300 hover:scale-[1.02] "
            >
              {/* Image on top */}
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={blog.imageUrl}
                alt={blog.title}
              />

              {/* Text content */}
              <div className="p-4 flex flex-col justify-between rounded-b-lg text-white">
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                  <p>By {blog.author}</p>
                  <p>{new Date(blog.publishedOn).toLocaleDateString()}</p>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-orange-500 transition">{blog.title}</h3>

                <p className="mb-4 text-gray-300">{blog.description}</p>
                <Link href={`/blog/${blog.id}`} legacyBehavior>
                  <a className="text-orange-500">Read more...</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-t border-orange-500 w-2/3 my-8 mx-auto" />
        <div className="flex justify-center">
          <button
            className="px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-300 hover:text-black transition-colors duration-2000"
          >
            LOAD MORE
          </button>
        </div>
      </div>

    </>
  );
}

export default Blog;
