const changeSizeBtn = document.querySelector('changeSize');
//changeSizeBtn.addEventListener('click', );

const container = document.querySelector('#container');
const square = document.createElement('div');
square.style.opacity = 0;
square.style.backgroundColor = 'black';
square.style.borderStyle = 'solid';
square.style.width = '100px';
square.style.height = '100px';
square.addEventListener('mouseover', function() {
    temp = getOpacity(square.style.opacity);
    square.style.opacity = temp;
    
});


container.appendChild(square);


function getOpacity(n)
    {
    n = parseFloat(n);
    
    if (n >= 1)
        {
        return 0;
        }
    else
        {
        n += .1;
        return n;
        }
    }

function getLength() 
    {
    temp = parseInt(prompt("Enter Side Length, please"));
    if (temp < 2)
        {
        temp = 2;
        }
    else if (temp > 100)
        {
        temp = 100;
        }

    }

function getColor(color, opacity)
    {
    
        
    }