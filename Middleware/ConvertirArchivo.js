import fs from "fs"

fs.readFile('./Data/colores.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    const bloques = data.split(/\n\s*\n/);
    // Procesar cada bloque
    const coloresConvertidos = bloques.map(bloque => {
        // Dividir el bloque en líneas
        const lineas = bloque.trim().split('\n');
        // Filtrar las líneas vacías
        const lineasFiltradas = lineas.filter(linea => linea.trim().length > 0);
        // Tomar el nombre y el valor del color
        const nombre = lineasFiltradas[0].trim();
        const valor = lineasFiltradas.slice(1).map(linea => linea.trim()).join(', ');
        return `${nombre}, ${valor}`;
    });
    // Unir los resultados en un solo texto
    const resultadoFinal = coloresConvertidos.join('\n');
    // Escribir el resultado en un nuevo archivo
    fs.writeFile('./Data/colores_convertidos.txt', resultadoFinal, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo convertido:', err);
            return;
        }
        console.log('Colores convertidos y guardados exitosamente.');
    });
    const jsonContent = JSON.stringify(convertir_arrray, null, 2);

    fs.writeFile('./Data/data_colores.json', jsonContent, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo JSON:', err);
            return;
        }

        console.log('Colores convertidos y guardados en formato JSON exitosamente.');
    });

});

// const leerArchivos = async () => {
//     try {
//         const [data, colores] = await Promise.all([
//             fs.promises.readFile('./Data/combinacion.txt', 'utf8'),
//             fs.promises.readFile('./Data/data_colores.json', 'utf8')
//         ]);

//         const color_json = JSON.parse(colores);
//         const separar = data.split("\n")
//         const convertir_arrray = separar.map((item, i) => {
//             const [color, resto] = item.split(", ");
//             const [nombre, rgb] = color.split(" ")
//             const [complementario, valor_rgb] = resto.split(" ")
//             const colorEncontrado_color = color_json.find(dato => dato.Nombre === nombre.toUpperCase());
//             const colorEncontrado_complemento = color_json.find(dato => dato.Nombre === complementario.toUpperCase());
//             return {
//                 id: i,
//                 Nombre: nombre.trim().toUpperCase(),
//                 Hexadecimal: colorEncontrado_color ? colorEncontrado_color.Hexadecimal : null,
//                 Rgb: rgb,
//                 complementario: complementario.trim(),
//                 valor_rgb: valor_rgb,
//                 valor_hexadecimal: colorEncontrado_complemento ? colorEncontrado_complemento.Hexadecimal : null
//             };
//         });

//         const jsonContent = JSON.stringify(convertir_arrray, null, 2);

//         fs.writeFile('./Data/data_combinaciones.json', jsonContent, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error al escribir en el archivo JSON:', err);
//                 return;
//             }

//             console.log('Colores convertidos y guardados en formato JSON exitosamente.');
//         });
//     } catch (error) {
//         console.error('Error al leer los archivos:', error);
//     }
// };


leerArchivos();


const leerArchivos = async () => {
    try {
        const [data, colores] = await Promise.all([
            fs.promises.readFile('./Data/combinacion.txt', 'utf8'),
            fs.promises.readFile('./Data/data_colores.json', 'utf8')
        ]);

        const color_json = JSON.parse(colores);
        const separar = data.split("\n")
        const convertir_arrray = separar.map((item, i) => {
            const [color, resto] = item.split(/,\s(?![^(]*\))/);
            const [nombre, rgb] = color.split(/\s(?![^(]*\))/)
            const [complementario, valor_rgb] = resto.split(/\s(?![^(]*\))/)
            const colorEncontrado_color = color_json.find(dato => dato.Nombre === nombre.toUpperCase());
            const colorEncontrado_complemento = color_json.find(dato => dato.Nombre === complementario.toUpperCase());
            return {
                id: i,
                Nombre: nombre.trim().toUpperCase(),
                Hexadecimal: colorEncontrado_color ? colorEncontrado_color.Hexadecimal : null,
                Rgb: rgb,
                complementario: complementario.trim(),
                valor_rgb: valor_rgb,
                valor_hexadecimal: colorEncontrado_complemento ? colorEncontrado_complemento.Hexadecimal : null
            };
        });

        const jsonContent = JSON.stringify(convertir_arrray, null, 2);

        fs.writeFile('./Data/data_combinaciones.json', jsonContent, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                return;
            }

            console.log('Colores convertidos y guardados en formato JSON exitosamente.');
        });
    } catch (error) {
        console.error('Error al leer los archivos:', error);
    }
};


leerArchivos();
