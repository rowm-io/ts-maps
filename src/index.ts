import { Map } from './Map';
import { User } from './User';
import { Company } from './Company';


const user = new User();
const company = new Company();

let customMap: Map;

function initMap(): void {
    customMap = new Map('map');
    customMap.addMarker(user); // Implicit type checking is going on here for mappable type
    customMap.addMarker(company);
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;