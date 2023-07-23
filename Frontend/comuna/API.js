let urlAll = "http://localhost:5000/api/comuna/all";
let urlAdd = "http://localhost:5000/api/comuna/add";
let urlDelete = "http://localhost:5000/api/comuna/del";
let urlOne = "http://localhost:5000/api/comuna/one";
let urlUpdate = "http://localhost:5000/api/comuna/upd";

let urlMun = "http://localhost:5000/api/municipio/all"
//Read
export let allComunas = async () =>{
    try {
        let comuna = await fetch(urlAll);
        let infoComunas = comuna.json();
        return infoComunas;
    } catch (error) {
        console.log(error);
    }
}
//Insert
export let addComuna = async (registro) => {
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
export let deleteComuna = async (id) =>{
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
export async function updateComuna(data,id){
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
//obtener todos los municipios
export let allMunicipios = async () => {
    try {
        let municipios = await fetch(urlMun);
        let infoMunicipios = municipios.json();
        return infoMunicipios;
    } catch (error) {
        console.log(error);
    }
};