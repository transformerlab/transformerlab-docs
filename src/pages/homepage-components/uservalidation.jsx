import React from "react";

const userValidations = [
    {
        quote: "TransformerLab streamlined our ML workflow and saved us countless hours.",
        author: "Jane Doe, CTO at DataCorp",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "The best SaaS platform for rapid prototyping and deployment.",
        author: "John Smith, Lead Engineer at InnovateX",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "Exceptional support and a robust feature set. Highly recommended!",
        author: "Emily Chen, Product Manager at NextGen",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const UserValidation = () => (
    <section style={{
        background: "#f9fafb",
        padding: "4rem 0",
        textAlign: "center"
    }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: 700, color: "#111827" }}>
            Trusted by Innovative Teams
        </h2>
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            maxWidth: "900px",
            margin: "0 auto"
        }}>
            {userValidations.map((uv, idx) => (
                <div key={idx} style={{
                    background: "#fff",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    padding: "2rem",
                    maxWidth: "320px",
                    flex: "1 1 260px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <img
                        src={uv.avatar}
                        alt={uv.author}
                        style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            marginBottom: "1rem",
                            objectFit: "cover",
                            border: "2px solid #e5e7eb"
                        }}
                    />
                    <blockquote style={{
                        fontStyle: "italic",
                        color: "#374151",
                        marginBottom: "1.5rem"
                    }}>
                        “{uv.quote}”
                    </blockquote>
                    <div style={{
                        fontWeight: 600,
                        color: "#2563eb"
                    }}>
                        {uv.author}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default UserValidation;