let urlAll = "http://localhost:5000/api/municipio/all";
let urlAdd = "http://localhost:5000/api/municipio/add";
let urlDelete = "http://localhost:5000/api/municipio/del";
let urlOne = "http://localhost:5000/api/municipio/one";
let urlUpdate = "http://localhost:5000/api/municipio/upd";

let urlAllDep = "http://localhost:5000/api/departamento/all";
//Read
export let allMunicipios = async () =>{
    try {
        let municipios = await fetch(urlAll);
        let infoMunicipios = municipios.json();
        return infoMunicipios;
    } catch (error) {
        console.log(error);
    }
}
//Insert
export let addMunicipio = async (registro) => {
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
export let deleteMunicipio = async (id) =>{
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
export async function updateMunicipio(data,id){
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
//obtener los ids de departamentos
export let allDepartamentos = async () => {
    try {
      let departamentos = await fetch(urlAllDep);
      let infoDepartamentos = await departamentos.json();
      return infoDepartamentos;
    } catch (error) {
      console.log(error);
    }
  };
  