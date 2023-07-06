function calculaIMC() {
    document.getElementById("peso").style.borderColor = "#FFFFFF";
    document.getElementById("peso").style.backgroundColor = "#FFFFFF";
    document.getElementById("altura").style.borderColor = "#FFFFFF";
    document.getElementById("altura").style.backgroundColor = "#FFFFFF";
    if (document.getElementById("peso").value == "") {
        alert("Preencha o peso!");
        document.getElementById("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "#FFE5E5";
        document.getElementById("peso").focus();
        return false;
    }
    if (document.getElementById("altura").value == "") {
        alert("Preencha o altura!");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "#FFE5E5";
        document.getElementById("altura").focus();
        return false;
    }
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso/(altura*altura);
    alert("Seu IMC é: " + resultado);
    return true;
}