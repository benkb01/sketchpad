let length =16;

const changeSizeBtn = document.querySelector('#changeSize');
changeSizeBtn.addEventListener('click', newGrid);

const container = document.querySelector('#container');
container.style.lineHeight = 0;
makeGrid();

container.appendChild(square);

function newGrid()
    {
    clearGrid();
    setLength();
    }

function makeGrid()
    {
    
    for (let i = 0; i < length * length; i++)
        {
        let square = document.createElement('div');
        square.style.opacity = 0;
        square.style.backgroundColor = 'black';
        square.style.width = (Math.floor(400.0 / length)).toString() + 'px';
        square.style.height = (Math.floor(400.0 / length)).toString() + 'px';
        square.style.display = 'inline-block';

        square.classList.add('square');

        square.addEventListener('mouseover', function(e) {
        e.target.style.opacity = getOpacity(e.target.style.opacity);
        });

        container.appendChild(square);
        }
    }

function clearGrid()
    {
    let squares = document.querySelectorAll('.square');
    squares.forEach((div) => 
        {
        div.parentElement.removeChild(div);
        });
    }

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

function setLength() 
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
    length = temp;
    makeGrid();
    }

function getColor(color, opacity)
    {
    
        
    }


    /*
const square = document.createElement('div');

square.style.opacity = 0;
square.style.backgroundColor = 'black';
square.style.borderStyle = 'solid';
square.style.width = (Math.floor(400.0 / length)).toString() + 'px';
square.style.height = (Math.floor(400.0 / length)).toString() + 'px';
square.style.display = 'inline-block';

square.addEventListener('mouseover', function(e) {
    e.target.style.opacity = getOpacity(e.target.style.opacity);
});
*/