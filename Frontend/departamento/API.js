let urlAll = "http://localhost:5000/departamento/all";
let urlAdd = "http://localhost:5000/departamento/add";
let urlDelete = "http://localhost:5000/departamento/del";
let urlOne = "http://localhost:5000/departamento/one";
let urlUpdate = "http://localhost:5000/departamento/upd";

//Read
export let allDepartamentos = async () =>{
    try {
        let departamentos = await fetch(urlAll);
        let infoDepartamentos = departamentos.json();
        return infoDepartamentos;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export let addDepartamento = async (registro) => {
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
export let deleteDepartamento = async (id) =>{
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
export async function updateDepartamento(data,id){
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