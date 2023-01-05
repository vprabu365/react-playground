import React from "react";

export default function Main() {
    return (
        <main>
            <h2 className="name">Veda Vyas Prabu</h2>
            <span className="title">Frontend Developer</span>
            <h4 className="website">vyas365@gmail.com</h4>
            <div className="action">
                <button className="email"><img className="email--icon" src="../images/write-email-envelope-button.png" />Email</button>
                <button className="office"><img className="office--icon" src="../images/link.png" />Linkedin</button>
            </div>
            <h2 className="about">About</h2>
            <span className="about--content">I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                I try to keep up with security and best practices, and am always looking for new things to learn.</span>
            <h2 className="interests">Interests</h2>
            <span className="interest--content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</span>
        </main>
    )
}