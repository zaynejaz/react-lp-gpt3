import React from 'react'
import { Feature } from '../../components'

import './styles.scss'

const featureHeadingTitle = "What is GPT-3";
const featureHeadingText = "Generative Pre-trained Transformer 3 (GPT-3) is an autoregressive language model that uses deep learning to produce human-like text. It is the third-generation language prediction model in the GPT-n series created by OpenAI. GPT-3's full version has a capacity of 175 billion machine learning parameters. GPT-3, is part of a trend in natural language processing (NLP) systems of pre-trained language representations.";
const featureTitle1 = "Chat Bots"
const featureText1 = "Create fully conversational AI Chat Bot powered by OpenAI's GPT-3, a 175 billion parameters state-of-the-art language model. You can use it to automate your customer support, online applications, many other tasks - the possibilities are endless!"
const featureTitle2 = "Knowledge Base"
const featureText2 = "A GPT-3 powered knowledge base will write support articles for you. GPT-3's inspires knowledge retrieval and question answering, instead of using structured KBs as in previous use cases, GPT-3 will treat queries as an implicit and unstructured KB that can jointly acquire and process relevant knowledge"
const featureTitle3 = "Education"
const featureText3 = "GPT-3 has the potential to change life as we know it, from the way our jobs are done, the way we interact on the internet, and how we learn. GPT-3 can create multiple choice questions, write short essays, and even surmise explanations."

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title={featureHeadingTitle} text={featureHeadingText} />
            </div>
            <div className="gpt3__whatgpt3-heading" >
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore the library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title={featureTitle1} text={featureText1} />
                <Feature title={featureTitle2} text={featureText2} />
                <Feature title={featureTitle3} text={featureText3} />
            </div>
        </div>
    )
}

export default WhatGPT3
