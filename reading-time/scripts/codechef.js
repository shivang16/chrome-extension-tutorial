var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
    const allElements = document.querySelectorAll('p');
    console.log(allElements);
    const parentElement = document.getElementById("problem-statement");
    console.log(parentElement);
    // `document.querySelector` may return null if the selector doesn't match anything.
    if (allElements) {
        var totalLength = 0;
        for(let i=0;i<allElements.length;i++){ 
            if(allElements[i].className=='') 
                totalLength+=allElements[i].textContent.length;
        };
        console.log(totalLength);
        const readingTime = Math.round(totalLength / 1000);
        console.log(readingTime);
        const badge = parentElement.prepend("p");
        // Use the same styling as the publish information in an article's header
        badge.classList.add("color-secondary-text", "type--caption");
        badge.textContent = `⏱️ ${readingTime} min read`;
    
        // Support for API reference docs
        // const heading = article.querySelector("h1");
        // // Support for article docs with date
        // const date = article.querySelector("time")?.parentNode;
    
        // (date ?? heading).insertAdjacentElement("afterend", badge);
    }
});
