const togBtn = document.getElementById('toggle-btn');
const shape = document.getElementById('shape');

togBtn.addEventListener('click', () => {
    // for detecting the class of shape element 

    var attr = shape.getAttributeNode("class").value;

    if(attr == 'cube'){
        shape.classList.replace('cube','ring');
    }
    else if(attr == 'ring'){
        shape.classList.replace('ring','cube');
    }

    togBtn.classList.toggle('active');
});
