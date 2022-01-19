import React from 'react'
import { Feature } from '../../components'

import './styles.scss'

const featuresData = [
    {
        title: 'Improving distrust and honesty',
        text: 'this is some text this is some text this is some text'
    },
    {
        title: 'Become the tended active',
        text: 'this is some text this is some text this is some text'
    },
    {
        title: 'Message or am nothing',
        text: 'this is some text this is some text this is some text'
    },
    {
        title: 'Really boy law county',
        text: 'this is some text this is some text this is some text'
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
