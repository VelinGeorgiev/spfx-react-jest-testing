import { IceCream } from "./IceCream";
import { IIceCreamProvider } from "./IIceCreamProvider";

export class IceCreamFakeProvider implements IIceCreamProvider {

    public getAll(): Promise<Array<IceCream>> {

        return new Promise<Array<IceCream>>((resolve, reject) => {

            let list = [
                { UniqueId: "1", Title: "Cherry" },
                { Uniqueid: "2", Title: "Chocolate" },
                { Uniqueid: "3", Title: "Coffee and Cookie" },
                { Uniqueid: "10", Title: "Vanilla" }
            ] as IceCream[];

            // fake https call by resolving it after 10 milisecs.
            //setTimeout(_ => { resolve(list); }, 10);

            resolve(list);
        });
    }

    public buy(uniqueid: string, quantity: number): Promise<void> {

        return new Promise<void>((resolve, reject) => {
            
            // fake https call by resolving it after 10 milisecs.
            //setTimeout(_ => { resolve(); }, 10);

            resolve();
        });
    }
}