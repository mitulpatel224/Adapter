import { Adapter } from './master-adapter';
import { Data } from '../models/Data';


export class DataAdapter extends Adapter<Data> {
    convertFromResponse(data: any): Data {
        return new Data(data);
    }
    convertToRequest(data: Data) {
        return { data };
    }
}
