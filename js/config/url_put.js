const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlPUT = "https://ws-agung-2024-b77249100221.herokuapp.com/update/" + presensiId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}