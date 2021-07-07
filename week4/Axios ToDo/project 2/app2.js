document.getElementById('submit').addEventListener('click',(event)=> {
    axios.get('https://official-joke-api.appspot.com/jokes/ten').then((response) => {

        let div = document.getElementById('mainDiv');

        if(div) {
            document.body.removeChild(div);
        }

    
    div = document.createElement('div');
    div.id = 'mainDiv';
    document.body.appendChild(div);

    response.data.forEach(element => {
        let div = document.getElementById('mainDiv');
        let ul = document.createElement('ul');
        let l1 = document.createElement('li');
        l1.textContent = element.setup;
        let l2 = document.createElement('li');
        l2.textContent = element.punchline;
      

        ul.appendChild(l1);
        ul.appendChild(l2);
        
        div.appendChild(ul);

        });

    });

});