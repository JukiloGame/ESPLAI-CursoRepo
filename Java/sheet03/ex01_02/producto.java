package sheet03.ex01_02;

public class producto {
	private String nombre;
	private double precio;
	private int stock;

	public producto(String nombre, double precio, int stock) {
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}
	public producto(String nombre, double precio) {
		this.nombre = nombre;
		this.precio = precio;
		this.stock = 0;
	}
	public void MostrarDatos() {
		System.out.println("Nombre: " + this.nombre + " || Precio: " + this.precio + " || Stock: " + this.stock);
	}
}
