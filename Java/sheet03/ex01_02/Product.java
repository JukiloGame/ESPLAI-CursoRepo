package sheet03.ex01_02;

public class Product {
	private String name;
	private double price;
	private int stock;

	public Product(String name, double price, int stock) {
		this.name = name;
		this.price = price;
		this.stock = stock;
	}
	public Product(String name, double price) {
		this.name = name;
		this.price = price;
		this.stock = 0;
	}
	public Product(String name) {
		this.name = name;
		this.price = 0;
		this.stock = 0;
	}
	public void showData() {
		System.out.println("Nombre: " + this.name + " || Precio: " + this.price + " || Stock: " + this.stock);
	}
	public double getPrice() {
		return this.price;
	}

	public String getName() {
		return this.name;
	}


}
