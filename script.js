function validationNoPol() {
    var nopol = document.getElementById("noPol").value;
    var nopolDepan = document.getElementById("noPolDepan").value;
    var nopolBelakang = document.getElementById("noPolBelakang").value;



    if (nopol % 2 == 0) {
        document.getElementById("masukan1").innerHTML = `${nopolDepan} ${nopol} ${nopolBelakang} Kendaraan dengan plat Genap`;
    } else {
        document.getElementById("masukan1").innerHTML = `${nopolDepan} ${nopol} ${nopolBelakang} Kendaraan dengan plat Ganjil`;
    }

    // if (nopolDepan % 2 == 0) {
    //     document.getElementById("masukan1").innerHTML = "Bilangan Genap";
    // } else {
    //     document.getElementById("masukan1").innerHTML = "Bilangan Ganjil";
    // }
}