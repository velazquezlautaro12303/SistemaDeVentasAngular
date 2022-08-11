export class Product{

  constructor(nameProduct:string, price:number, id:number){
      this.nameProduct = nameProduct;
      this.price = price;
      this.id = id;
  }

  id:number;
  nameProduct:string;
  price:number;
}

export class ItemCart{

  constructor(product:Product, cant:number){
    this.cant = cant;
    this.product = product;
  }

  product:Product;
  cant:number
}

export class ItemCarts{

  constructor(productId:number, cant:number){
    this.productId = productId;
    this.cant = cant;
  }

  productId:number;
  cant:number;
}

export class Order{

  total:Number;
  id:Number;

  constructor(
    date:string,
    methodBuy:String,
    cupon:[String,Number],
    id:Number,
    total:Number/*,
    itemCarts:ItemCart[]*/
    ){
    this.date = date;
    this.methodBuy = methodBuy;
    this.cupon = cupon;
    this.id = id;
    this.total = total;
    /*this.itemCarts = itemCarts;
    this.total = itemCarts.map(
      (itemCart:ItemCart) => itemCart.product.price * itemCart.cant).reduce(
        (acumulator:number, total:number) => acumulator + total,0);*/
  }

  date:string;
  methodBuy:String;
  cupon:[String,Number];
  itemCarts:ItemCart[] = [];
}

export class User{
  id:number;
  nameUser:String;
  constructor(
    id:number,
    nameUser:String
  ){
    this.id = id;
    this.nameUser = nameUser
  }
}

export class MethodBuy{
  id:Number;
  nameMethodBuy:String;
  constructor(
    id:Number,
    nameMethodBuy:String
  ){
    this.id = id;
    this.nameMethodBuy = nameMethodBuy
  }
}

export class Coupon{
  id:number;
  codeCoupon:String;
  discout:number;

  constructor(
    id:number,
    codeCoupon:String,
    discount:number
  ){
    this.id = id;
    this.codeCoupon = codeCoupon;
    this.discout = discount;
  }
}
