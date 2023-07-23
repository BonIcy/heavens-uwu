let urlAll = "http://localhost:5000/api/barrio/all";
let urlAdd = "http://localhost:5000/api/barrio/add";
let urlDelete = "http://localhost:5000/api/barrio/del";
let urlOne = "http://localhost:5000/api/barrio/one";
let urlUpdate = "http://localhost:5000/api/barrio/upd";
//Read
export let allBarrios = async () =>{
    try {
        let barrios = await fetch(urlAll);
        let infoBarrios = barrios.json();
        return infoBarrios;
    } catch (error) {
        console.log(error);
    }
}
//Insert
export let addBarrio = async (registro) => {
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
export let deleteBarrio = async (id) =>{
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
export async function updateBarrio(data,id){
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