package sheet03.ex01_02;

public class Main {
	public static void main(String[] args) {
		//? Ejericicio 1
		// producto p1 = new producto();
		// p1.nombre = "Mantequilla";
		// p1.precio = 2.59;
		// p1.stock = 45;
		// p1.MostrarDatos();
		// producto p2 = new producto();
		// p2.nombre = "Chorizo";
		// p2.precio = 3.29;
		// p2.stock = 32;
		// p2.MostrarDatos();
		//? Ejericicio 2
		Product p3 = new Product("Gambas", 11.59);
		p3.showData();
		Product p4 = new Product("Monster", 2.20, 15);
		p4.showData();
	}
}
