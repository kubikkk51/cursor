
const baseUrl = "https://swapi.dev/api";
const list = document.getElementById("list");
const btn = document.getElementById("load");
const planetList = document.getElementById("planetList");
const page = document.getElementById("page");
let currentPage = 1;
const back = document.getElementById("back");
const next = document.getElementById("next");


const getInformation =  () => {
    list.innerHTML = "Loading...";
    axios
    .get( `${baseUrl}/films/2` )
    .then( (response) => {

        let listElems = response.data.characters;
        let listOfPeople = "";
        listElems.forEach( item=> {
            axios
            .get (`${item}`)
            .then((response) => {
                Object.values(response).forEach( (data) => {
                    if(data.name !== undefined){
                        listOfPeople += `
                        <div class="people">  
                            <h3>Full name: ${data.name}</h3>
                            <p>Date of birth: ${data.birth_year}</p>
                            <p>Gender: ${data.gender}</p>
                        </div>
                        `
                    }
                } );
                list.innerHTML = listOfPeople;
            } )
            .catch( (err) => {
                console.log("Error:", err);
                
            } );
        } );
    } )
    .catch( (err) =>{
        console.log("Error:" , err); 
    } );
}

btn.onclick = getInformation; 

const getPlanets = () => {
    planetList.innerHTML = "Loading...";
    page.innerHTML = currentPage;
    axios
    .get(`${baseUrl}/planets/?page=${currentPage}`)
    .then( (response) => {
        const listElems = response.data.results.map((item) =>  `
            <div class="planet">  
                <h3>Name: ${item.name}</h3>
            </div>
            `
        );
        planetList.innerHTML = listElems.join("");
    } )
    .catch( (err) => {
        console.log("Error:", err);
    } );
    
}
next.addEventListener( "click", () => {
    if(currentPage === 6) return;
    currentPage += 1;
    getPlanets();
} );
back.addEventListener( "click", () => {
    if(currentPage === 1) return;
    currentPage -= 1;
    getPlanets();
} );

getPlanets();