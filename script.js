let nombreUsuario;
let edadUsuario;
let añosPorSumar = [5, 10, 20]; 
let edadesFuturas = []; 

function pedirDatos() {
    nombreUsuario = prompt("¿Cuál es tu nombre?");
    edadUsuario = prompt("¿Cuántos años tienes?");

    while (isNaN(edadUsuario) || edadUsuario <= 0) {
        edadUsuario = prompt("Por favor, ingresa una edad válida (mayor a 0):");
    }

    edadUsuario = parseInt(edadUsuario);
}

function calcularEdadesFuturas() {
    edadesFuturas = []; 
    for (let i = 0; i < añosPorSumar.length; i++) {
        edadesFuturas.push(edadUsuario + añosPorSumar[i]);
    }
}

function mostrarResultados() {
    console.log(`¡Hola, ${nombreUsuario}!`);
    console.log(`Tienes ${edadUsuario} años actualmente.`);
    console.log("Tu edad futura será:");

    for (let i = 0; i < añosPorSumar.length; i++) {
        console.log(`En ${añosPorSumar[i]} años tendrás ${edadesFuturas[i]} años.`);
    }

    alert("Los cálculos de edad futura han sido mostrados en la consola.");
}

function simulador() {
    pedirDatos(); 
    let continuar = confirm("¿Quieres realizar un cálculo de edad futura?");
    
    if (continuar) {
        calcularEdadesFuturas(); 
        mostrarResultados(); 
    } else {
        alert("¡Hasta luego!");
    }
}

simulador();
