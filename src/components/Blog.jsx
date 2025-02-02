import React from 'react';

const Blog = () => {
    const blogPosts = [
        {
            title: "Building Responsive Websites with Tailwind CSS",
            description: "Learn how to create beautiful, responsive websites using Tailwind CSS framework...",
            image: "/blog1.jpg",
            date: "March 15, 2024",
            readTime: "5 min read",
            category: "Web Development",
            link: "#"
        },
        // Add more blog posts
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                    Latest <span className="text-indigo-500">Blogs</span>
                </h2>

                {/* Featured Post */}
                <div className="mb-16">
                    <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <img 
                                    src={blogPosts[0].image} 
                                    alt={blogPosts[0].title}
                                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-8 md:w-1/2">
                                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm mb-4">
                                    {blogPosts[0].category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4">{blogPosts[0].title}</h3>
                                <p className="text-gray-300 mb-6">{blogPosts[0].description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400 text-sm">{blogPosts[0].date}</span>
                                    <span className="text-gray-400 text-sm">{blogPosts[0].readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <a href={post.link} key={index} className="group">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative h-48">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm mb-4">
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                                    <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">{post.date}</span>
                                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;