'use client'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./componets/header";
import BlogCard from "./componets/BlogCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://ecnextapp.test/wp-json/wp/v2/blogs?acf_format=standard');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="container mx-auto px-4 mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
      
    </div>
  );
}

