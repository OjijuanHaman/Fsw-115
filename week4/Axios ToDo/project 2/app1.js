document.getElementById('submit').addEventListener('click',(event)=> {
    axios.get('https://api.coinbase.com/v2/currencies').then((response) => {

        let div = document.getElementById('mainDiv');

        if(div) {
            document.body.removeChild(div);
        }

    
    div = document.createElement('div');
    div.id = 'mainDiv';
    document.body.appendChild(div);

    response.data.data.forEach(element => {
        let div = document.getElementById('mainDiv');
        let ul = document.createElement('ul');
        let l1 = document.createElement('li');
        l1.textContent = element.id;
        let l2 = document.createElement('li');
        l2.textContent = element.name;
        let l3 = document.createElement('li');
        l3.textContent = element.min_size;

        ul.appendChild(l1);
        ul.appendChild(l2);
        ul.appendChild(l3);
        div.appendChild(ul);

        });

    });

});