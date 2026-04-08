import {saludar, despedir, estadoSistema} from "../src/app.js"

function ejecutarPruebas() {
let pasadas =0;
let fallidas =0;

const r1 = saludar("Arlex")
if (r1.includes("Arlex")){
console.log("Test 1 pasado: funcion saludar en arlex es correcta")
pasadas++;
}else{
console.log("Test 1 fallido: ", r1);
fallidas++; 
}


const actualEstado = estadoSistema();
if (actualEstado.estado == "activo"){
console.log("Test 2: pasado: estadoSistema() funciona en arlex ");
pasadas++;
}else{
console.log("Test 2 fallido: ", estado, "en arlex");
fallidas++;
}

const sumaResultado = suma(11, 20);
if(sumaResultado === 31){
    console.log("Test 3 pasado: funcion suma (11, 20) es correcta(31)");
    pasadas++;
}else{
    console.log("Test 3 fallido:  se esperaba 31, se obtuvo ", sumaResultado );
fallidas++;
}

console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
if(fallidas>0) process.exit(1); 
}
ejecutarPruebas();
