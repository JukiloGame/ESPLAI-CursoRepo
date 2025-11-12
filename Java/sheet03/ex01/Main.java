package Java.sheet03.ex01;

public class Main {
	public static void main(String[] args) {
		Producto p1 = new Producto();
		p1.nombre = "Mantequilla";
		p1.precio = 2.59;
		p1.stock = 45;
		p1.MostrarDatos();
		Producto p2 = new Producto();
		p2.nombre = "Chorizo";
		p2.precio = 3.29;
		p2.stock = 32;
		p2.MostrarDatos();
	}
}
