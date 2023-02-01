import React from "react";
import {Container} from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container fluid>
                <div className="w-50 m-3">
                    <h2>About Me:</h2>
                    <p>Name: Sidney Mak</p>
                    <p>Country of Origin: Hong Kong</p>
                    <p>Age: 27</p>
                    <p>Hi! Seeing as I'm bad with formalities, I can talk a little bit about myself right here.</p>
                    <p>I hail from Hong Kong, currently living in Perth. As part of my efforts to secure a foothold here, I have been taking lessons in web design, and this little website here is to showcase my current skillset!</p>
                    <p>It's not all that much to look at for now, but it'll be much more impressive in the future! Hopefully.</p>
                </div>
                <img className="w-50 m-3" src="./images/My_stupid_face.jpg" alt="What I look like!"></img>
        </Container>
    )
}

export default AboutMe