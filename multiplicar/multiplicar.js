// Proceso de multiplicar y creacion del file
// requires
const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return; // El return hace que se salga de la funcion
        }
        let dataTable = '';
        // Mientras i sea <= 10 incrementa i 1 unidad
        for (let i = 1; i <= limite; i++) {

            //resultado = base * i;
            dataTable += `${ base } * ${ i } = ${ base * i}\n`;
            // \n es salto de linea
        }

        const data = new Uint8Array(Buffer.from(dataTable));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) return reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });


    });
};

// Permite exportar lo que se necesite
module.exports = {
    crearArchivo,
    listarTabla
};