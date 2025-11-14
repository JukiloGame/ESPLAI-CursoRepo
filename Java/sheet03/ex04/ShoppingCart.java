package sheet03.ex04;
import sheet03.ex01_02.Product;
import java.util.List;
import java.util.ArrayList;

public class ShoppingCart {
	public static void main(String[] args) {
		addProduct(new Product("Gambas", 11.59), 50);
		addProduct(new Product("Fanta", 1.59), 20);
		addProduct(new Product("Gambas", 11.59), 30);

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
		int total = 0;
		for (CartLine cartLine : cartLines) {	
			System.out.println(cartLine.getProductInfo());
			total += cartLine.subtotal();
		}
		System.out.println("\n Precio total: " + total + " euros");
		
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
}
