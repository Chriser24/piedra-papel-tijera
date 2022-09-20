let piedra, papel,tijera,partidas;
Boolean, bandera = false;

let pc = 0; 
jugador = 0;
empate = 0;
maquina = 0;
let cantidad= +prompt("cuantas partidas desea jugar");

for (i=0; i<cantidad; i++){
        
    let user = prompt("escoja la opcion piedra, papel o tijera")
    pc = Math.floor(Math.random()*3+1);

    if(user == tijera &&  pc == user){
        console.log("El juego esta empatado") 
             
    }

    else if(user == piedra && pc== user){
        console.log("El juego esta empatado")
        empate =empate+1;
    }
    else if(user == papel && pc == user){
        console.log("El juego esta empatado")
        empate =empate+1;
    }
    else if(user == tijera &&  pc == papel){
        console.log("El ganador es el user") 
        jugador = jugador + 1;     
    }

    else if(user == piedra && pc == tijera){
        console.log("El ganador es el user")
        jugador = jugador + 1;
    }
    else if(user == papel && pc == piedra){
        console.log("El ganador es el user")
        jugador = jugador + 1;
    }
    else if(user == tijera &&  pc == piedra){
        console.log("El ganador es el pc")
        maquina = maquina + 1;      
    }

    else if(user == piedra && pc == papel){
        console.log("El ganador es el pc")
        maquina = maquina + 1;
    }
    else if(user == papel && pc == tijera){
        console.log("El ganador es el pc")
        maquina = maquina + 1;
    }
    
    
}
document.write("el ganador es la maquina" + pc );
    document.write("el ganador es el user" + jugador );