import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

import './styles.scss'

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening. We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Aug 1, 2021" title="A college student used GPT-3 to write fake blog posts and ended up at the top of Hacker News" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="May 10, 2021" title="Meet GPT-3. It Has Learned to Code (and Blog and Argue)." />
                    <Article imgUrl={blog03} date="May 23, 2021" title="GPT-3 Powers the Next Generation of Apps" />
                    <Article imgUrl={blog04} date="Jun 22, 2021" title="Stop Worrying About AI Writing Tools: How to Use GPT-3" />
                    <Article imgUrl={blog05} date="Jun 29, 2021" title="GPT 3 and SEO: Why AI Will Revolutionize Your Content Forever" />
                </div>

            </div>
        </div>
    )
}

export default Blog
