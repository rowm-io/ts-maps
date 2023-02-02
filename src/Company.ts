import faker, { fake } from 'faker';

// (Optional) To correctly place type related issue in class. This not
// required. It helps to staisfy types in class implementation
// import { Mappable } from './Map'; 
// export class Company implements Mappable {}

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <div>
                <h3>Company Name: ${this.companyName}</h3>
                <h5>Catchphrase: ${this.catchPhrase}</h5>
            </div>
        `;
    }
}