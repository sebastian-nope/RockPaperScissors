function juego (user,cpu) {

    //piedra
    if (user == "piedra" && cpu == "piedra"){
        return "Empate, la piedra empata contra la piedra";
    }
    else if (user == "piedra" && cpu == "papel"){
        return "Perdiste, la piedra pierde contra el papel";
    }
    else if (user == "piedra" && cpu == "tijera"){
        return "Ganaste, la piedra gana contra a la tijera";
    }

    //papel 
    else if (user == "papel" && cpu == "papel"){
        return "Empate, el papel empata contra el papel";
    }
    else if (user == "papel" && cpu == "piedra"){
        return "Ganaste, el papel gana contra la piedra";
    }
    else if (user == "papel" && cpu == "tijera"){
        return "Perdiste, el papel pierde contra la tijera";
    }

    //tijera
    else if (user == "tijera" && cpu == "tijera"){
        return "Empate, la tijera empata contra la tijera";
    }
    else if (user == "tijera" && cpu == "piedra"){
        return "Perdiste, la tijera pierde contra la piedra";
    }
    else if (user == "tijera" && cpu == "papel"){
        return "Ganaste, la tijera gana contra el papel";
    }

    else {
        return "Error, elije bien por favor";
    }
}

//juego ("piedra","papel")