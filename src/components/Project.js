import React from 'react';

//todo: Make this a flexible template.
//There a few variables there that are interchangeable: the title, the description, a picture and a link.

const Project = () => {
    return (
        <section>
            <h3>Currency Converter</h3>
            <a href = "https://hashim-codingjourney.github.io/currency-converter/">
                <img src="./Assets/Images/Currency Converter.png" alt="Currency Converter"></img>
            </a>
            <p>A currency converter website that can also keep track of fluctuating currency value in a graph, as well as world news from a currency's origin.
                Great for keeping track of why a currency's value may be going up or down depending on that particular region's current events!
            </p>   
        </section>
    )
}

export default Project