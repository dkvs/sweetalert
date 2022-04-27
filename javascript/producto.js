class Producto { 
    constructor(id,nombre,descripcion,precio,foto){ //creo el objeto producto
        this.id = Number(id);
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion.toUpperCase();
        this.precio = Number(precio);
        this.foto = foto;
    }
}

// const productos = [];

// productos.push(new Producto("1","taza",600));
// productos.push(new Producto("2","apoya cuchara",200));
// productos.push(new Producto("3","bowl",400));
// productos.push(new Producto("4","bandeja",800));

//     function buscarId(busc, producto){
//         return busc.find(obj => obj.id === producto.toUpperCase())
//     }


var productos= [
    {
      "id": 1,
       "nombre": "apoya cuchara",
       "precio": 450,
       "destacado": true,
       "imagen": "",
    },
    {
      "id": 2,
       "nombre": "taza",
       "precio": 850,
       "destacado": true,
       "imagen": "./img/pngocean.com (7).png"
    },
    {
      "id": 3,
       "nombre": "fuente",
       "precio": 2000,
       "destacado": true,
       "imagen": "./img/pngocean.com (3).png"
    },
    {
      "id": 4,
       "nombre": "colador",
       "precio": 1200,
       "destacado": true,
       "imagen": "./img/pngocean.com (4).png"
    },
    {
      "id": 5,
       "nombre": "jarra",
       "precio": 980,
       "destacado": true,
       "imagen": "./img/pngocean.com (22).png"
    },
    {
      "id": 6,
       "nombre": "set cuencos",
       "precio": 2500,
       "destacado": true,
       "imagen": "./img/pngocean.com (11).png"
    },
    {
      "id": 7,
       "nombre": "florero",
       "precio": 800,
       "destacado": true,
       "imagen": "./img/pngocean.com (10).png"
    },
    {
      "id": 8,
       "nombre": "lecherita",
       "precio": 950,
       "destacado": true,
       "imagen": "./img/pngocean.com (9).png"
    },
  ]