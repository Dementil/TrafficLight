(function(global) {
    'use strict';

    var div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div'),
        div4 = document.createElement('div'),
        div5 = document.createElement('div'),
        div6 = document.createElement('div'),
        button = document.createElement('button'),
        light1 = document.getElementsByClassName('light1'),
        light2 = document.getElementsByClassName('light2'),
        light3 = document.getElementsByClassName('light3'),
        content = document.getElementById('content');

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(button);

    div1.appendChild(div4);
    div2.appendChild(div5);
    div3.appendChild(div6);

    div1.classList.add('box');
    div2.classList.add('box');
    div3.classList.add('box');

    div4.classList.add('light1');
    div5.classList.add('light2');
    div6.classList.add('light3');

    button.classList.add('btn');
    button.innerHTML = "Старт";

    button.onclick = function move() {

        var pos = setTimeout(function() {
            light1[0].style.background = '#ff0000';
            // light2[0].style.background = '#800000';
            // light3[0].style.background = '#800000';
        }, 1000);

        var pos2 = setTimeout(function() {
            light1[0].style.background = '#800000';
            light2[0].style.background = '#ffff00';
            // light3[0].style.background = '#800000';
        }, 4000);

        var pos3 = setTimeout(function() {
            // light1[0].style.background = '#800000';
            light2[0].style.background = '#800000';
            light3[0].style.background = '#008000';
        }, 7000);

        var pos = setTimeout(function() {
            light1[0].style.background = '#ff0000';
            light2[0].style.background = '#800000';
            light3[0].style.background = '#800000';
        }, 10000);


        // var pos = setInterval(function() {
        // 	move();
        // }, 100000);

    };


} (window));