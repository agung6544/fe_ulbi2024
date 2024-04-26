import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-agung-2024-b77249100221.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}