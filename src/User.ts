import faker from 'faker';
import { Mappable } from './Map';



export class User implements Mappable { // to
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
            <div>
                <h3>User Name: ${this.name}</h3>
            </div>
        `;
    }
}