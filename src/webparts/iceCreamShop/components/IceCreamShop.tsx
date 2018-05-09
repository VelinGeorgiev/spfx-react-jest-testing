import * as React from 'react';
import styles from './IceCreamShop.module.scss';
import * as strings from 'IceCreamShopWebPartStrings';
import { IIceCreamShopProps } from './IIceCreamShopProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IIceCreamShopState } from './IIceCreamShopState';
import { IceCream } from '../iceCreamProviders/IceCream';

export default class IceCreamShop extends React.Component<IIceCreamShopProps, IIceCreamShopState> {
  constructor(props: IIceCreamShopProps) {
    super(props);

    this.state = {
      iceCreamFlavoursList: [],
      quantity: 1,
      selectedIceCream: null,
      totalPrice: 0,
      hasBoughtIceCream: false
    };
  }

  public componentDidMount(): void {

    // Retrieve the ice cream types.
    this.props.iceCreamProvider.getAll().then((result: IceCream[]) => {

      // Update the iceCreamFlavoursList.
      this.setState((state: IIceCreamShopState): IIceCreamShopState => {

        state.iceCreamFlavoursList = result;
        return state;
      });
    });
  }

  public render(): React.ReactElement<IIceCreamShopProps> {
    return (
      <div className={styles.ic}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>{this.props.title}</span>
              <div id="iceCreamFlavoursList">
                {
                  this.state.iceCreamFlavoursList &&
                  this.state.iceCreamFlavoursList.map((item, index) => {

                    return <div key={item.UniqueId}>

                      <div className={styles.subTitle}>{item.Title}</div>

                      <button className={styles.button} onClick={this.selectHandler.bind(this, item)}>
                        {strings.GetItLabel} {item.Price}
                      </button>

                    </div>;
                  })
                }
              </div>

              {this.state.selectedIceCream &&

                <div id="buyForm">
                  <div className={styles.row}>
                    <label className={styles.subTitle}>{strings.QuantityLabel}: </label>
                    <input type="number" value={this.state.quantity} min="1" onChange={this.quantityChangeHandler.bind(this)} />
                  </div>

                  <div className={styles.row}>
                    <button className={styles.button} id="buyButton" onClick={this.buyHandler.bind(this)}>
                      {strings.BuyLabel} x{this.state.quantity} {this.state.selectedIceCream.Title} {strings.ForLabel} {this.state.totalPrice}
                    </button>
                  </div>
                </div>
              }

              {this.state.hasBoughtIceCream && <p>{strings.SuccessLabel}!</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  public selectHandler(iceCream: IceCream): void {

    this.setState((state: IIceCreamShopState): IIceCreamShopState => {
      state.selectedIceCream = iceCream;
      state.totalPrice = Math.round((state.quantity * state.selectedIceCream.Price) * 100) / 100;
      state.hasBoughtIceCream = false;
      return state;
    });
  }

  public buyHandler(): void {

    if (this.isValid() == false) return;

    const uniqueid = this.state.selectedIceCream.UniqueId;
    const quantity = this.state.quantity;
    this.props.iceCreamProvider.buy(uniqueid, quantity).then(result => {

      this.setState((state: IIceCreamShopState): IIceCreamShopState => {
        state.hasBoughtIceCream = true;
        return state;
      });
    });
  }

  public quantityChangeHandler(event: React.ChangeEvent<any>) {
    const inputValue = event.target.value;

    this.setState((state: IIceCreamShopState): IIceCreamShopState => {
      state.quantity = inputValue;
      state.totalPrice = Math.round((inputValue * state.selectedIceCream.Price) * 100) / 100;
      return state;
    });
  }

  private isValid(): boolean {
    return this.state.selectedIceCream
      && this.state.selectedIceCream.UniqueId.length > 0
      && this.state.quantity > 0;
  }
}
