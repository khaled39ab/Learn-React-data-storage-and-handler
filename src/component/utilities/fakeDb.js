//use local storage to manage data
const addToDb = (id) =>{
    let cosmeticCart ={};

    //get the cosmeticCart
    const storedCart = localStorage.getItem('cosmetic-cart');
    if(storedCart){
        cosmeticCart = JSON.parse(storedCart);
    }

    //add quantity to local storage
    const quantity =cosmeticCart[id];
    if(quantity){
        // const newQuantity = +quantity + 1; //+quantity means parseInt(quantity)
        // localStorage.setItem(id, newQuantity)
        const newQuantity = quantity + 1;
        cosmeticCart[id] = newQuantity;
    }
    else{
        // localStorage.setItem(id, 1);
        cosmeticCart[id] = 1;
    }

    localStorage.setItem('cosmetic-cart', JSON.stringify(cosmeticCart))
}

export {addToDb}