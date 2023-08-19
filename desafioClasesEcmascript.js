class ProductManager{
    constructor() {
        this.products = []
}

    obligatory(title, description, price, thumbnail, code, stock){ //Todos los datos son obligatorios
    if(!title || !description || !price ||!thumbnail ||!code ||!stock){
        return console.log("¡Todos los datos son OBLIGATORIOS!")
    }
}

    validateProducts(title, description, price, thumbnail, code, stock){
        if(!title || !title.trim()){
            return new Error("El producto debe tener título.")
        }
        if(!description || !description.trim()){
            return new Error("El producto debe tener descripción.")
        }
        if(!isNaN(price) || price.toString().includes("$ ")){
            return new Error("El precio tiene que ser solo numérico.")
        }
        if(!thumbnail || !thumbnail.trim()){
            return new Error("El producto debe tener imagén .")
        }
        if(!isNaN(code) || code.toString()){
            return new Error("El código tiene que ser solo numérico.")
        }
        if(!isNaN(stock) || stock.toString()){
            return new Error("El stock tiene que ser solo numérico.")
        }
    }

    addProduct(title, description, price, thumbnail, code, stock){
    let newId //ID autoincrementable
    if(this.products.length === 0){
        newId=1
    }else{
        newId=this.products[this.products.length-1].id+1
    }

    const newProduct = {
        title,
        description,
        price,
        thumbnail,
        id:newId,
        code,
        stock
    }
    this.products.push(newProduct)
    console.log("Se agregó: ", newProduct)
    }

    unicoCode(code){ //No se repita el Code
        for(let i = 0; i < globalThis.products.length; i++){
        if(this.products[i].code === code) {
            return this.products[i]
        }
        }
        return null
    }

    getProducts(){
        console.log(this.products)
    }

    getProductById(identificateProduct){
    const getProduct = this.products.find(e => e.id===identificateProduct)
    if(!getProduct){
        console.log("ERROR not found...")
    }else{
        return getProduct
    }
}
}

const product0 = new ProductManager()
console.log(product0)
product0.getProductById()
product0.getProducts()

product0.addProduct("Minecraft", "Acción y aventura, mundo abierto, todas las versiones", 500, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fimg%2Fcfn%2F11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png&tbnid=VdCeew7CQrSG3M&vet=12ahUKEwibkY3d1-WAAxW-K7kGHdNFDBEQMygAegUIARDMAQ..i&imgrefurl=https%3A%2F%2Fwww.playstation.com%2Fes-ar%2Fgames%2Fminecraft%2F&docid=yQvb8-XrtxtBCM&w=2048&h=2048&q=minecraft&ved=2ahUKEwibkY3d1-WAAxW-K7kGHdNFDBEQMygAegUIARDMAQ", 1, 200)
product0.addProduct("Grand Theft Auto V", "Acción y aventura, mundo abierto", 2000, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-geektopia.com%2Fstorage%2Ft%2Fi%2F242%2F24231%2F91k7mmlq6hl_sl1500_.webp&tbnid=C9NhQTXcyXiXNM&vet=12ahUKEwi-5KjI1uWAAxUTIbkGHYk1A3oQMygGegUIARCgAQ..i&imgrefurl=https%3A%2F%2Fwww.geektopia.es%2Fes%2Fproduct%2Frockstar-games%2Fgrand-theft-auto-v%2F&docid=EMZ6zOzFUUfWiM&w=1080&h=1500&q=gta%20v%20descripcion&ved=2ahUKEwi-5KjI1uWAAxUTIbkGHYk1A3oQMygGegUIARCgAQ", 2, 100)
product0.addProduct("Red Dead Redemption", "Acción y aventura, mundo abierto", 2000, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fcdn%2FUP1004%2FCUSA03041_00%2FHpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png&tbnid=oQnlJw8elTLfAM&vet=12ahUKEwi90aOB2uWAAxXMFLkGHQ2mAWAQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.playstation.com%2Fes-ar%2Fgames%2Fred-dead-redemption-2%2F&docid=smbDnPb1swY1CM&w=1024&h=1024&q=Red%20Dead%20Redemption%202&hl=es-419&ved=2ahUKEwi90aOB2uWAAxXMFLkGHQ2mAWAQMygAegQIARBz", 3, 100)
product0.addProduct("Mortal Kombat 1", "Acción y lucha", 3000, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.api.playstation.com%2Fvulcan%2Fap%2Frnd%2F202305%2F1515%2F93797636f47b37b74e9d3740e17ae1306aaf539c7952a703.jpg&tbnid=478w-M5mpUK5YM&vet=12ahUKEwjCt5CF3OWAAxWnupUCHeBxDwEQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fstore.playstation.com%2Fes-ar%2Fproduct%2FUP1018-PPSA07570_00-MKONE00000000000&docid=NaaGLY7xDoky8M&w=1440&h=2160&q=mortal%20kombat%201&hl=es-419&ved=2ahUKEwjCt5CF3OWAAxWnupUCHeBxDwEQMygAegQIARBz", 4, 50)
product0.addProduct("Stray", "Aventura y puzles", 1000, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fstray%2Fimages%2F3%2F39%2FSite-community-image%2Frevision%2Flatest%3Fcb%3D20220731151430%26path-prefix%3Des&tbnid=C6HUPG6W2GdobM&vet=12ahUKEwiv7cLj3-WAAxWjrJUCHQ3hD2YQMygMegQIARBr..i&imgrefurl=https%3A%2F%2Fstray.fandom.com%2Fes%2Fwiki%2FStray&docid=g63aTmDI45LbuM&w=376&h=452&q=stray%20genero%20&hl=es-419&ved=2ahUKEwiv7cLj3-WAAxWjrJUCHQ3hD2YQMygMegQIARBr", 5, 200)
