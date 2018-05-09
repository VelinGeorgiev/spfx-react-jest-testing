import { IceCream } from "./IceCream";
import { IIceCreamProvider } from "./IIceCreamProvider";
import { SPRest, SearchQuery } from "@pnp/sp";

export class IceCreamPnPJsProvider implements IIceCreamProvider {
    
    private readonly sp: SPRest;

    constructor(sp: SPRest){
        this.sp = sp;
    }

    public getAll(): Promise<IceCream[]> {
        
        return new Promise<IceCream[]>(async (resolve, reject) =>{

            const query: SearchQuery = {
                RowLimit: 10, 
                SelectProperties: ["UniqueId","Title","PriceOWSNMBR"],
                Querytext: 'path:https://spfxjest.sharepoint.com/sites/jest/Lists/IceCreamFlavours AND contenttypeid:0x01*'
            } as SearchQuery; 

            const searchResults = await this.sp.search(query);

            const result = [];
            for(const item of searchResults.PrimarySearchResults) { 
                result.push({UniqueId: item.UniqueId, Title: item.Title, Price: Math.round(item["PriceOWSNMBR"] * 100) / 100});
            }

            resolve(result);
        });
    }

    public buy(uniqueid: string, quantity: number): Promise<void> {

        return new Promise<void>(async (resolve, reject) =>{
            
            await this.sp.web.lists.getByTitle('Ice Cream Orders').items.add({
                "Title": uniqueid,
                "Quantity": quantity
            });
            resolve();
        });
    }
}