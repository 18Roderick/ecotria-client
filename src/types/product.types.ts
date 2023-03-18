export interface ProductDetail {
  _id: string;
  subscriberId: string;
  titlePost: string;
  price: number;
  descriptionPost: string;
  address: string;
  phoneNumber: string;
  createDate: string;
  updateDate: string;
  feature: string;
  Images?: string[];
  claps: number;
  no_claps: number;
}
