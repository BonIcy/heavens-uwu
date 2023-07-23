let urlAll = "http://localhost:5000/api/creyente/all";
let urlAdd = "http://localhost:5000/api/creyente/add";
let urlDelete = "http://localhost:5000/api/creyente/del";
let urlOne = "http://localhost:5000/api/creyente/one";
let urlUpdate = "http://localhost:5000/api/creyente/upd";

let urlBar = "http://localhost:5000/api/barrio/all";

//Read
export let allCreyentes = async () =>{
    try {
        let creyentes = await fetch(urlAll);
        let infoCreyentes = creyentes.json();
        return infoCreyentes;
    } catch (error) {
        console.log(error);
    }
}
//Insert
export let addCreyente = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};
//Delete
export let deleteCreyente = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};
//Read One
export async function selectOne(id) {
    try {
        let response = await fetch(`${urlOne}/${id}`);
        let result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};
//Update
export async function updateCreyente(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

export let allBarrios = async () => {
    try {
      let barrios = await fetch(urlBar);
      let infoBarrios = await barrios.json();
      return infoBarrios;
    } catch (error) {
      console.log(error);
    }
  };