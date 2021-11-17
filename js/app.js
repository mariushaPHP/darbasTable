'use strict'

let text = "Man labai patinka JavaScript 😃" ;

document.querySelector('.button').addEventListener('click', ()=>{

    let rowNr = document.querySelector('.row').value;
    let columnNr = document.querySelector('.column').value;
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.margin = '30px 0';
    table.style.width = '100%';
    document.querySelector('body').appendChild(table);

    for(let i=0; i<rowNr; i++){
        const row = document.createElement('tr')
        for(let i=0; i<columnNr; i++){
            const cell = document.createElement('td');
            cell.textContent = text;
            cell.style.textAlign = 'center';
            cell.style.border = '1px solid black'
            row.appendChild(cell);
            
        }
        table.appendChild(row);
    }
});