package sheet03.ex04;
import sheet03.ex01_02.Product;
import java.util.List;
import java.util.ArrayList;

public class ShoppingCart {
	public static void main(String[] args) {
		addProduct(new Product("Gambas", 11.59), 50);
		addProduct(new Product("Fanta", 1.59), 20);
		addProduct(new Product("Gambas", 11.59), 30);

		removeProduct(new Product("Gambas"), 40);

		getResume();

	}
	private static class CartLine {
		Product product;
		int units;
		double subtotal() { return product.getPrice() * units; }

		public CartLine(Product product, int units) {
			this.product = product;
			this.units = units;
		}

		public String getProductInfo() {
			return String.format("Nombre: %s || Unidades %d || Subtotal: %.2f euros", product.getName(), units, subtotal());
		}
	}

	private static List<CartLine> cartLines = new ArrayList<>();

	public static void getResume() {
		for (CartLine cartLine : cartLines) {	
			System.out.println(cartLine.getProductInfo());
		}
		System.out.printf("\n Precio total: %.2f euros", total());
		
	}

	public static double total() {
		double total = 0;
		for (CartLine cartLine : cartLines) {	
			total += cartLine.subtotal();
		}
		return total;
	}

	public static boolean addProduct(Product p, int units) {
		if (p == null || units <= 0 || p.getPrice() < 0) return false;
		for (int i = 0; i < cartLines.size(); i++) {
			if (cartLines.get(i).product.getName().equals(p.getName())) {
				cartLines.get(i).units += units;
				return true;
			}
		}
		CartLine line = new CartLine(p, units);
		line.subtotal();
		return cartLines.add(line);
	}

	public static boolean removeProduct(Product p, int units) {
		if (p == null || units <= 0) return false;
		for (int i = 0; i < cartLines.size(); i++) {
			if (cartLines.get(i).product.getName().equals(p.getName())) {
				if (cartLines.get(i).units < units) return false;
				cartLines.get(i).units -= units;
				if (cartLines.get(i).units == 0) cartLines.remove(i);
				return true;
			}
		}
		return false;
	}
}
