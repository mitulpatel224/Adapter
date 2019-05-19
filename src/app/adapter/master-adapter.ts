/**
 * Abstract Adapter class of type <T>
 * Convert data from API responce to/from our model
 */
export abstract class Adapter<T> {

    /**
     * Convert response data to <T> for our app use
     * @param data any data to convert in <T>
     */
    abstract convertFromResponse(data: object): T;

    /**
     * Convert data <T> to suitable request object for API
     * @param data <T>
     */
    abstract convertToRequest(data: T): any;
}
