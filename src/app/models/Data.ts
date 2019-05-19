/**
 * Data model
 */
export class Data {
    constructor({ Category, Description }) {
        this.category = Category;
        this.description = Description;
    }
    category: string;
    description: string;
}
