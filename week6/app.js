

const getDarth = async () => {
    let main;
    let ship;
    let film;
    let film2;
    try{
       main = await axios.get("https://swapi.dev/api/people/4")
       ship = await axios.get("https://swapi.dev/api/starships/13/")
       film = await axios.get("https://swapi.dev/api/films/6")
       film2 = await axios.get("https://swapi.dev/api/films/3/")  
       displayDataToDom(main,ship,film,film2)
    }
    catch(error){
       console.log(error)
    }
 }
 getDarth()
 
 function displayDataToDom(main,ship,film,film2){
    const title = document.createElement("h1");
    title.textContent = main.data.name;
    document.body.append(title);
 
    const subTitle = document.createElement("h2");
    subTitle.textContent = "Transportation: " + ship.data.name;
    document.body.append(subTitle);
 
    const shipModel = document.createElement("h4");
    shipModel.textContent = "Model:  " + ship.data.model;
    document.body.append(shipModel);

    const villian = document.createElement("p");
    villian.textContent = "A timeless villian brought to life by " + film.data.director ;
    document.body.append(villian);
 
    const epThree = document.createElement("p");
    epThree.textContent = main.data.name + " turns to the Dark side in " + film.data.title + " released "  + film.data.release_date;
    document.body.append(epThree);
 
   const epSix = document.createElement("p");
   epSix.textContent = main.data.name +" lost his life after returning to the light side in " +  film2.data.title;
    document.body.append(epSix);
 }





   