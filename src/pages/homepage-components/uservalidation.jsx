import React from "react";

import Ram from "./img/ram.png";
import Elena from "./img/elena.jpg";
import Jash from "./img/jash.jpg";

const userValidations = [
    {
        quote: "Transformer Lab has made it easy for me to experiment and use LLMs in a completely private fashion.",
        author: "Ramanan Sivaranjan",
        role: "Head of Engineering, Quantum Bridge",
        avatar: Ram,
    },
    {
        quote: "The essential open-source stack for serious ML teams.",
        author: "Elena Yunusov",
        role: "Executive Director, Human Feedback Foundation",
        avatar: Elena,
    },
    {
        quote: "SLURM is outdated, and Transformer Lab is the future.",
        author: "Jash Mehta",
        role: "Applied Research Scientist, ServiceNow",
        avatar: Jash,
    },
];

// Duplicate data multiple times to ensure a seamless infinite loop on wide screens
const userValidationsExpanded = [
    ...userValidations,
    ...userValidations,
    ...userValidations,
    ...userValidations
];

const UserValidation = () => {
    return (
        <section className="uv-section">
            <h2 className="uv-title">Trusted by Innovative Teams</h2>
            
            <div className="uv-marquee-mask">
                <div className="uv-marquee-track">
                    {userValidationsExpanded.map((uv, idx) => (
                        <div key={idx} className="uv-card">
                            <blockquote className="uv-quote">
                                “{uv.quote}”
                            </blockquote>
                            <div className="uv-header">
                                <img
                                    src={uv.avatar}
                                    alt={uv.author}
                                    className="uv-avatar"
                                />
                                <div className="uv-author-info">
                                    <div className="uv-author-name">
                                        {uv.author}
                                    </div>
                                    <div className="uv-author-role">
                                        {uv.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserValidation;