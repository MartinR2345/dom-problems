//Step 1: Create a paragraph <p> tag and <button> tag and link tag in HTML file
//Step 2: Give the link tag an id name, called targetLink and I added youtube's website to href
//Step 3: Give <button> tag an onclick event and an id name, called goToLink()
//Step 4: In my Javascript file, write a function name goToLink() and inside that block of code or curly braces, I'm going to use the the getElementByID to target my "targetLink" as well as get the attribute and I save it to a variable name "myLink".  I made sure to target my p1 innerHTML which will be connected to my save variable "myLink"

function goToLink() {
    const link = document.getElementById('targetLink').getAttribute('href');
    document.getElementById('p1').innerHTML = link;
}