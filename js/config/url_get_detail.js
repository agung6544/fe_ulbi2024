//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-agung-2024-b77249100221.herokuapp.com/presensi/" + presensiId;