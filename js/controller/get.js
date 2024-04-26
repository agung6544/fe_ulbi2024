import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    // Validasi input
    if (!value.biodata || !value.biodata.jamkerja || !Array.isArray(value.biodata.jamkerja) || value.biodata.jamkerja.length === 0) {
        console.error('Missing or invalid jamkerja data in value:', value);
        return;
    }

    // Ambil elemen pertama dari jamkerja jika tersedia
    const jamKerja = value.biodata.jamkerja[0]; // Ambil shift pertama jika tersedia
    
    let content = isiTabel
        .replace("#NAMA#", value.biodata.nama)
        .replace("#NOHP#", value.biodata.phone_number)
        .replace("#JABATAN#", value.biodata.jabatan)
        .replace("#LOKASI#", value.location)
        .replace("#STATUS#", value.checkin)
        .replace("#HARIKERJA#", value.biodata.hari_kerja.join(", "))
        .replace("#JAMKERJA#", jamKerja.durasi || 'Belum diatur')
        .replace("#JAMMASUK#", jamKerja.jam_masuk || 'Belum diatur')
        .replace("#JAMKELUAR#", jamKerja.jam_keluar || 'Belum diatur')
        .replace("#WARNA#", getRandomColor())
        .replace(/#WARNALOGO#/g, getRandomColorName());
    
    addInner("iniTabel", content);
}
