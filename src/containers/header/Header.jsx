import React from 'react'

import './styles.scss'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Something Amazing with OpenAI's GPT-3
                </h1>
                <p>
                    Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text. A third-generation language prediction model in the GPT-n series created by OpenAI.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>
                        25,000 developers requested early access upon release
                    </p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
