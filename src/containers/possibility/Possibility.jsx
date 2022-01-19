import React from 'react'

import possibilityImage from '../../assets/possibility.png'
import './styles.scss'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibilityImage" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Given any text prompt like a phrase or a sentence, GPT-3 returns a text completion in natural language. Developers can “program” GPT-3 by showing it just a few examples or “prompts.” GPT-3's API has been designed to be both simple for anyone to use but also flexible enough to make machine learning teams more productive.</p>
                <p>With over 300 applications delivering GPT-3–powered search, conversation, text completion, and other advanced AI features through GPT-3's API.</p>
                <h4>Get Started Today. Request Early Access Now</h4>
            </div>
        </div>
    )
}

export default Possibility