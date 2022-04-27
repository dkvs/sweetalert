// Aquí comienza un código que encontré en internet para el menú acordeón en el curso de DW.

const toggleButton = document.getElementsByClassName('acordeon')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}
)

//Fin del código menú acordeón.



    // let boton = document.getElementById("btn"); //traigo el boton por el id

    // boton.addEventListener("click",cuotas); //Al boton le agrego el evento, le digo 
    // //que será llamado con un click y accionará la función catalogo
    
    // function cuotas(){
    
    //     for (i=0; i<2;i++){
    //         let busqueda = buscarId(productos, prompt("Ingresa el id del producto que desea observar \n 1- Taza \n 2- Apoya Cuchara \n 3- Bowl \n 4- Bandeja"));
    //         if(busqueda!= undefined){
    //             alert("El producto es: " + busqueda.nombre + "\nSu número de id es: " + busqueda.id + "\nY su precio es de: " + busqueda.precio)
    //         }else{
    //             alert("No existe ese producto")
    //         }
    //     }
    
    // }


let coleccion = new Array();
const clave_local_storage = "coleccionProductos";

cargar_producto();



let btn_crear = document.getElementById("btn_crear");
btn_crear.addEventListener("click",()=>{
    
    if (validar_carga()){

        generarProducto();

    }else{
        alert("Complete todos los campos para continuar");
    }

    
})




function validar_carga(){
    let input_id= document.getElementById("id").value;
    let input_nombre= document.getElementById("nombre").value;
    let input_descripcion= document.getElementById("descripcion").value;
    let input_precio= document.getElementById("precio").value;
    let input_foto= document.getElementById("foto_carga").value;

    if (!input_id){
        alert("Ingrese el ID del producto")
        return false;
    }

    if (!input_nombre) {
        alert("Ingrese el nombre del producto")
        return false;
    }
    if (!input_descripcion) {
        alert("Ingrese la descripción del producto")
        return false;
    }
    if (!input_precio) {
        alert("Ingrese el precio del producto")
        return false;
    }
    if (!input_foto) {
        alert("Ingrese la foto del producto")
        return false;
    }

    return true;

}


function generarProducto(){

    let id=document.getElementById("id").value;
    let nombre=document.getElementById("nombre").value;
    let descripcion=document.getElementById("descripcion").value;
    let precio=document.getElementById("precio").value;
    let foto=document.getElementById("foto_carga").value;

    let producto = new Producto(id,nombre,descripcion,precio,foto);

    coleccion.push(producto);
    localStorage.setItem(clave_local_storage,JSON.stringify(coleccion)); //guardo el arreglo con la clave valor
    generar_vitrina(nombre,foto);
    swal("¡Producto Ingresado!", "Podrás ver el producto debajo :)");

}


function generar_vitrina(nombre,foto_carga){

    let new_div= document.createElement("div")
    let new_h2= document.createElement("h2")

    new_div.id="div"+nombre+foto_carga;
    new_h2.textContent=nombre;

    let new_img = document.createElement("img");
    new_img.src=foto_carga;

    new_div.appendChild(new_h2);
    new_div.appendChild(new_img);

    let contenedor = document.getElementById("productoWeb");

    contenedor.appendChild(new_div);

    resetear_form();

}


function resetear_form(){
    document.getElementById("id").value ="";
    document.getElementById("nombre").value ="";
    document.getElementById("descripcion").value ="";
    document.getElementById("precio").value ="";
    document.getElementById("foto_carga").value ="";
    
}



function cargar_producto(){
    let arreglo=localStorage.getItem(clave_local_storage);

    if(arreglo){

        arreglo= JSON.parse(arreglo);

        coleccion=arreglo;

        for(let i=0;i<arreglo.length;i++){

            let producto = arreglo[i];
            console.log(producto.nombre);
            console.log(producto.foto);

            generar_vitrina(producto.nombre,producto.foto);
            
            
        }

    }

}