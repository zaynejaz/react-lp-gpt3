import React from 'react'

import './styles.scss'
import gpt3Logo from '../../assets/logo.svg'

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step into the future before everyone else</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p type="button">Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>GPT-3 performs a wide variety of natural language tasks, and Codex, which translates natural language to code</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Featured</h4>
                    <p>OpenAI Codex</p>
                    <p>Startup Fund</p>
                    <p>Multimodal Neurons</p>
                    <p>Open AI</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>API</h4>
                    <p>Overview</p>
                    <p>Pricing</p>
                    <p>Examples</p>
                    <p>Docs</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Information</h4>
                    <p>About</p>
                    <p>Research</p>
                    <p>Publications</p>
                    <p>Careers</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>
                    OpenAI &#169; 2015 - {currentYear} All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer


