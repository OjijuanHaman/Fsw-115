  
const url = 'http://api.bryanuniversity.edu/ojijuanhaman/list/';
axios.get(url)
.then(response => {
    for(let i=0; i<response.data.length; i++){

        const newDiv = document.createElement("div");

  

         
        var item = document.createElement("h1")
        item.setAttribute("name", "item")
        item.setAttribute("id", "item"+[i]);
        item.textContent = response.data[i].name

        if(response.data[i].isComplete === true){
            item.style.textDecoration = "line-through"
            item.style.color = "red"
        }

        newDiv.appendChild(item)



        
        var description = document.createElement("p")
        description.setAttribute("id", "description"+[i]);
        description.textContent = "Task assigned to: " + response.data[i].description
        newDiv.appendChild(description)

             //checkbox
             var check = document.createElement("INPUT");
             check.setAttribute("type", "checkbox");
             check.setAttribute("id", "check");
             check.setAttribute("name", "check");
             
             newDiv.appendChild(check);
     
             check.checked = response.data[i].isComplete
     
             check.onclick = function() {
                 axios.put(url + response.data[i]._id, {"isComplete": !response.data[i].isComplete})
                 .then(response2 => {
                     console.log(response2)
                     window.location.reload()
                 })
                 .catch(error2 => console.log(error2)) 
             }

        
        var remove = document.createElement("INPUT");
        remove.setAttribute("type", "button");
        remove.setAttribute("name", "del");
        remove.setAttribute("id", "del");
        remove.setAttribute("value", "delete");
        newDiv.appendChild(remove);
    
            

        newDiv.setAttribute("name", "div"+[i])
        document.body.append(newDiv);


        remove.addEventListener('click', deletebutton) 
        function deletebutton(){ 
            axios.delete(url + response.data[i]._id)
                .then(response2 => {console.log(response.data[i]._id + "has been deleted", response2),
                window.location.reload()
            })
                .catch(error2 => console.log(error2)) 
        }

    }
})
.catch(error => console.log(error));


//POST
const todoform = document.todoform

todoform.addEventListener("submit", enter)
    function enter(e){
        e.preventDefault()

            var v = todoform.assigned.value
            console.log(v)
            let names;
            const URL = "https://swapi.dev/api/people"
            axios.get(`${URL}/${v}`)
            .then(response => {
                names = response.data.name
                name1 = todoform.name.value
                const newTodo = {
                    name: name1,
                    description: names
                }
               axios.post(url, newTodo)
                    .then(respond => {
                        console.log(respond)
                        window.location.reload()
                    })
                    .catch(error => console.log(error))
            })
           // todoform.reset()
        }