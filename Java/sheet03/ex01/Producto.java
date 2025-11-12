package Java.sheet03.ex01;

public class Producto {
	public String nombre;
	public Double precio;
	public int stock;

	public void MostrarDatos() {
		System.out.println("Nombre: " + this.nombre + " || Precio: " + this.precio + " || Stock: " + this.stock);
	}
}
