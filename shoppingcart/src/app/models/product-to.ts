export interface ProductTo {
  pid: string;
  pName: string;
  pPrice: number;
  pDesc: string;
}

export interface ProductModel extends ProductTo{
  quantity: number;
}
