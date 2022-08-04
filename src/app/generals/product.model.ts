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
