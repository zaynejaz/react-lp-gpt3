import React from 'react'
import { Feature } from '../../components'

import './styles.scss'

const featuresData = [
    {
        title: 'Viable',
        text: 'Viable helps companies better understand their customers by using GPT-3 to provide useful insights from customer feedback in easy-to-understand summaries.'
    },
    {
        title: 'Fable Studio',
        text: 'Fable Studio is creating a new genre of interactive stories and using GPT-3 to help power their story-driven “Virtual Beings.”'
    },
    {
        title: 'GPT-3 x Figma',
        text: 'Define your UI component in simple English, and GPT3 + Figma will create full blown mockup for you. With accurate text, images and logos'
    },
    {
        title: 'Algolia',
        text: 'Algolia uses GPT-3 in their Algolia Answers product to offer relevant, lightning-fast semantic search for their customers.'
    },
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id='features'>
            <div className="gpt3__features-heading">
                <h1 className='gradient__text'>
                    The Future is Now and You Don't Need To Miss It. Step Into The Future Today & Make It Happen
                </h1>
                <p>Request Early Access Now. Get Started Today.</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>

        </div>
    )
}

export default Features
