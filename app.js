//const fs = require('fs'); Paquete de Node 
//const fs = require('express'); fuera de documentacion de nodejs
//const fs = require('./fs'); archivo dentro de carpeta del proyecto

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}


//console.log(process.argv);
//let parametro = argv[2];
//let base = parametro.split('=')[1]