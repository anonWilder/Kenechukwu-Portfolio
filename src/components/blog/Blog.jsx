import React, { useState, useEffect } from 'react'
import './blog.css'



function Blog() {

    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@austineokafor.e')
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items)
            })
    }, [])

    console.log(blogs)

    return (
        <section id="blog">
            <h5>My Recent Articles</h5>
            <h2>BLOG</h2>
            <div className="blog__container">
                {blogs.map(blog => {
                    return (
                        <article className="blog__item">
                            <div className="blog__item-image">
                                <img src={blog.thumbnail} alt={blog.title} /><br />
                            </div>
                            <h3>{blog.title}</h3>
                            <div className="blog__item-cta">
                                <a href={blog.link} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Read More</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    );
}

export default Blog;