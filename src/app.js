import { version } from "react";

export function saludar(nombre){
return "Hola " + nombre + ", bienvenido a aplicacion  de Arlex";
}
export function despedir(nombre){
return "Hasta pronto, " + nombre + "!arlex";
}
export function estadoSistema() {
return {
estado: "activo",
version: "1.0.0",
message: "sistema calcularalex funcionando correctamente"
};
}

export function suma(a,b){
    return a + b;
}

export function healthCheck() {
    return { 
        status: "ok",
        timestamp: new Date().toISOString(),
        servicio: 'StreamFlow API',
        version: '1.0.0' 
    }
}