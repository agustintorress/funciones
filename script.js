alert("OmochaARG te da la bienvenida")


const IVA = 1.21
const precioIVA = (precio, iva) => precio * iva

let nombre, precio, modelo, nuevo

do {

    do {
        nombre = prompt("Ingrese su nombre completo porfavor").toLowerCase()
    }while(!isNaN(nombre) || nombre.length <0)

    alert("Tenemos distintos modelos de figuras, puede elegir entre: Comics, Manga, Manhwa y Dibujos Animados")

    do {
        modelo = prompt("Ingrese el modelo de figura que desea")
    }while(!isNaN(modelo) || modelo.length <0)

    switch(modelo) {
        case "Comics":
            precio = 2000
            alert(`El producto para ${nombre} esta estimado en $${precioIVA(precio, IVA)}`)
            break
        case "Manga":
            precio = 1500
            alert(`El producto para ${nombre} esta estimado en $${precioIVA(precio, IVA)}`)
            break
        case "Manhwa":
            precio = 1500
            alert(`El producto para ${nombre} esta estimado en $${precioIVA(precio, IVA)}`)
            break
        case "Dibujos Animados":
            precio = 1100
            alert(`El producto para ${nombre} esta estimado en $${precioIVA(precio, IVA)}`)
            break
        default:
            alert("Ingrese un modelo valido porfavor")
            break
    }

    nuevo = prompt("¿Desea consultar por algun otro producto?").toLowerCase()

}while(nuevo!="no")
