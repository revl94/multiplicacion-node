// importar modulo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Destructuracion
const argv = require('./config/yargs').argv; // extraigo solo lo que me interesa

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;


}



//let argv2 = process.argv; // veo los parametros de entrada
console.log('Limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2]; // posicion del parametro que quiero
// let base = parametro.split('=')[1]; // convierte de un string a un arreglo
// // se debe escribir en la consola algo como esto: node app.js --base=5

//console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));