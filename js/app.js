(function(){

    // container
    const container = document.getElementsByClassName('container')[0];

    // Rectangles
    for(let i = 1; i <= 16; i++) {
        let color = document.createElement('div');
        color.classList.add('color');
        container.append(color);
    }

    // Result
    let resultElem = document.createElement('div');
    resultElem.classList.add('result');
    container.append(resultElem);

    // Button
    let buttonElem = document.createElement('button');
    buttonElem.setAttribute('id','search');
    buttonElem.innerHTML = 'Changer les couleurs';
    container.append(buttonElem);

    const colors = document.getElementsByClassName('color');
    const result = document.getElementsByClassName('result')[0];

    // Generate new colors
    function changeColors() {

        for(let i = 0; i < colors.length; i++) {
            colors[i].classList.remove('border');

            let colorR = Math.floor((Math.random() * 256));
            let colorG = Math.floor((Math.random() * 256));
            let colorB = Math.floor((Math.random() * 256));

            colors[i].style.background = "rgba(" + colorR+ ", " + colorG + ", " + colorB + ", 1)";
            colors[i].innerHTML = colorR + ", " + colorG + ", " + colorB;
        }   
    
    }

    changeColors();

    const button = document.getElementsByTagName('button')[0];
    const opacity = document.getElementById('opacity'); // input range
    const spanOpacity = document.querySelector('.opacity span');

    // Change colors onClick
    button.addEventListener('click', changeColors);

    // Click handler on colors
    for(let i = 0; i < colors.length; i++) {

        colors[i].addEventListener('click', function() {

            [].forEach.call(colors, function(color) {
                color.classList.remove('border');
            });

            let colorValue = colors[i].innerHTML;
            colors[i].classList.add('border');
            let opacityValue = opacity.value / 10;

            result.innerHTML = 'La couleur séléctionée est le&nbsp;'
            + "<span style='color:rgb(" + colorValue + "); opacity:" + opacityValue + "'>" 
            + "rgb(" + colorValue  + ",</span>"
            + "<span style='color:rgb(" + colorValue + "); opacity:" + opacityValue + "' id='currentOpacity'> " + opacityValue  + ") </span>";

        });
    
    }

    // change event on input type range
    opacity.addEventListener('change', function() {

        let opacityValue = this.value / 10;

        [].forEach.call(colors, function(color) {
            color.style.opacity = opacityValue;
        });

        if(result.innerHTML != "") {
            const resultSpans = document.querySelectorAll('.result span');
            [].forEach.call(resultSpans, function(span) {
                span.style.opacity = opacityValue;
            });
            document.getElementById('currentOpacity').innerHTML = opacityValue + ")";
        }

        spanOpacity.innerHTML = opacityValue;

    });


}())