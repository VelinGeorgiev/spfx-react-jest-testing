import { IceCream } from "../iceCreamProviders/IceCream";

export interface IIceCreamShopState {
    selectedIceCream: IceCream;
    quantity: number;
    iceCreamFlavoursList: Array<IceCream>;
    hasBoughtIceCream: boolean;
  }
  