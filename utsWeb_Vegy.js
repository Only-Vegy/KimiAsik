function validasi(dataform){
    if (dataform.nama.value == ""){
        alert("Data nama belum diisi");
        dataform.nama.focus();
        return(false);
    }
    if (dataform.nomorhp.value == ""){
        alert("Data nomor HP belum diisi");
        dataform.nomorhp.focus();
        return(false);
    }
    if (dataform.email.value == ""){
        alert("Data email belum diisi");
        dataform.email.focus();
        return(false);
    }
    if (dataform.pesan.value == ""){
        alert("Pesan tidak boleh kosong");
        dataform.nomorhp.focus();
        return(false);
    }
    if (isNaN(dataform.nomorhp.value)){
        alert("Nomor HP harus berupa angka");
        dataform.nomorhp.focus();
        return(false);

    }
    else{
        var syaratemail = dataform.email.value;
        posisisAt = syaratemail.indexOf("@");
        posisiTitik = syaratemail.lastIndexOf(".");
        if (posisisAt < 1 || (posisiTitik - posisisAt < 2)){
            alert("Alamat email belum benar");
            dataform.email.focus();
            return(false);
        }
    }

    setTimeout(function(){
        dataform.reset();
    }, 1000); 
    
    return alert("Pesan Terkirim");
}
