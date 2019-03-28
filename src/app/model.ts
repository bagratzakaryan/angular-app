// export class Product {
// 	public sku: string;
// 	public name: string;
// 	public imageUrl: string;
// 	public department: string[];
// 	public price: number;

// 	constructor(product: Product) {
// 		this.sku = product.sku;
// 		this.name = product.name;
// 		this.imageUrl = product.imageUrl;
// 		this.department = product.department;
// 		this.price = product.price;
// 	}
// }

export class Product {
	constructor(
		public sku: string,
		public name: string,
		public imageUrl: string,
		public department: string[],
		public price: number) {
	}
}