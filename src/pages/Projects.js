import React from "react";
import Project from "../components/Project"
// Todo: Shrink this down using the 'project' component

const Projects = () => {
    <section id="projects" class="sections">
        <h2>Previous Projects:</h2>
        <p>Below are the best projects that I have worked on in the past.</p>
        <p>More will be added as my repertoire increases!</p>
        <div class="previous-projects">
            <section class="example featured">
                <h3>Currency Converter</h3>
                <a href = "https://hashim-codingjourney.github.io/currency-converter/">
                    <img src="./Assets/Images/Currency Converter.png" alt="Currency Converter"></img>
                </a>
                <p>A currency converter website that can also keep track of fluctuating currency value in a graph, as well as world news from a currency's origin.
                    Great for keeping track of why a currency's value may be going up or down depending on that particular region's current events!
                </p>    
            </section>
            <section class="example">
                <h3>Rentabay</h3>
                <a href = "https://powerful-basin-02440.herokuapp.com/">
                    <img src="./Assets/Images/Rentabay.png" alt="Rentabay"></img>
                </a>
                <p>A website application for posting up parking spots you wish to rent out, or to rent someone else's parking spots.
                    For when you really need to find a good parking space during a particularly busy day.
                </p> 
            </section>
            <section class="example">
                <h3>Placeholder Project 3</h3>
                <img src="./Assets/Images/Placeholder.png" alt="Placeholder"></img>
                <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</p>    
            </section>
            <section class="example">
                <h3>Placeholder Project 4</h3>
                <img src="./Assets/Images/Placeholder.png" alt="Placeholder"></img>
                <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah You reading this Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</p>    
            </section>
        </div>
    </section> 
}

export default Projects