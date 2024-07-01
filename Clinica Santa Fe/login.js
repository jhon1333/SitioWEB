function ingresar(){
    var usu = document.getElementById("txtUsu").value;
    var con = document.getElementById("txtCon").value;
    
    if (usu === ""){
        alert("Oe, no seas habil, pon tu usuario");
    } else if (con === ""){
        alert("Oe, no seas habil, pon tu contraseña");
    } else if (usu === "Christopher") {
        if (con === "holamundo"){
            window.open("calendario.html");
        } else {
            alert("Contraseña errada");
        }
    } else {
        alert("Usuario errado");
    }
}