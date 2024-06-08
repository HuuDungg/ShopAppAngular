export class Product {
    public id!: number;
    public name!: string;
    public price!: number;
    public thumbnail!: string;
    public description!: string;
    public createdAt!: string; // Nếu muốn chuyển đổi sang Date, có thể sử dụng Date
    public updatedAt!: string; // Nếu muốn chuyển đổi sang Date, có thể sử dụng Date
    public categoryId!: number;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.thumbnail = data.thumbnail;
        this.description = data.description;
        this.createdAt = data.created_at;
        this.updatedAt = data.updated_at;
        this.categoryId = data.category_id;
    }

}
