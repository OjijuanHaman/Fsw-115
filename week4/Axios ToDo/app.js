axios.get("http://api.bryanuniversity.edu/ojijuanhaman/list/").then(response => {
    for(let i = 0; i < 3; i++) {
        let h1 = document.createElement('h1');
        h1.textContent = response.data[i].name;
        let p1 = document.createElement('p');

        if(response.data[i].isComplete == true) {
            h1.style.textDecoration = "line-through";
        }

        p1.textContent = response.data[i].description;
        let p2 = document.createElement('p');
        p2.textContent = response.data[i].price;

        let div = document.createElement('div');
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
        document.body.appendChild(div);
    }
}).catch(error => {
    console.log(error);
})