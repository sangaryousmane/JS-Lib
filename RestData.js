


import axios from "axios";
const baseURL = 'http://localhost:8081/v1/employees/?mediaType=json';

const getEmployeeData = () =>{
axios.get(`${baseURL}`).then((response) =>{
    console.log(response.data)

})
}

getEmployeeData();


