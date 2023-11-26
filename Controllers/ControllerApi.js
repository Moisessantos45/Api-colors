import fs from "fs"


const solicitarColores = (req, res) => {
    fs.readFile('./Data/DataColors.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontradp" })
            return;
        }
        const separar = data.split("\n")
        const convertir_arrray = separar.map((item, i) => {
            const [nombre, hexadecimal, rgb, hsl] = item.split(", ");
            return {
                id: i,
                Nombre: nombre.trim().toUpperCase(),
                Hexadecimal: hexadecimal.trim(),
                Rgb: rgb.trim(),
                Hsl: hsl.trim()
            };
        });
        // console.log(convertir_arrray)

        res.status(200).json(convertir_arrray)
    });

}

const solicitar_color_id = (req, res) => {
    const { id } = req.params
    fs.readFile('./Data/data_colores.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.id == id);
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_color_name = (req, res) => {
    const { nombre } = req.params
    // console.log(nombre)
    fs.readFile('./Data/data_colores.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.Nombre == nombre.toUpperCase());
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_color_rgb = (req, res) => {
    const { rgb } = req.body
    fs.readFile('./Data/data_colores.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.Rgb == rgb);
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_color_hsl = (req, res) => {
    const { hsl } = req.body
    fs.readFile('./Data/data_colores.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.Hsl == hsl);
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_combinaciones=(req,res)=>{
    fs.readFile('./Data/data_combinaciones.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontradp" })
            return;
        }
        // console.log(data)
        const colores=JSON.parse(data)

        res.status(200).json(colores)
    });
}

const solicitar_complemento_color_id = (req, res) => {
    const { id } = req.params
    fs.readFile('./Data/data_combinaciones.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.id == id);
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_complemento_color_nombre = (req, res) => {
    const { nombre } = req.params
    fs.readFile('./Data/data_combinaciones.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.Nombre == nombre.toUpperCase());
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_complemento_color_rgb = (req, res) => {
    const { rgb } = req.body
    fs.readFile('./Data/data_combinaciones.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.Rgb == rgb);
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

const solicitar_complemento_color_hsl = (req, res) => {
    const { hsl } = req.body
    fs.readFile('./Data/data_combinaciones.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.status(404).json({ msg: "Archivo no encontrado" })
            return;
        }
        const colores = JSON.parse(data);
        // Filtrar el color por ID
        const color_buscado = colores.filter(item => item.Hsl == hsl);
        if (color_buscado.length === 0) {
            res.status(404).json({ msg: "Color no encontrado" });
            return;
        }
        res.status(200).json(color_buscado)
    })
}

export {
    solicitarColores,
    solicitar_color_id,
    solicitar_color_name,
    solicitar_color_rgb,
    solicitar_color_hsl,
    solicitar_combinaciones,
    solicitar_complemento_color_id,
    solicitar_complemento_color_nombre,
    solicitar_complemento_color_rgb
}