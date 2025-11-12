package sheet03.ex04;
import sheet03.ex01_02.Product;
import java.util.List;
import java.util.ArrayList;

public class ShoppingCart {
	public static void main(String[] args) {
		addProduct(new Product("Gambas", 11.59), 50);
		addProduct(new Product("Fanta", 42), 20);
		addProduct(new Product("Gambas", 11.59), 30);

		for (CartLine cartLine : cartLines) {	
			cartLine.getProductInfo();
		}
	}
	private static class CartLine {
		Product product;
		int units;
		double subtotal() { return product.getPrice() * units; }

		public void getProductInfo() {
			System.out.printf("Nombre: %s || Unidades %d || Subtotal: %.2f \n", product.getName(), units, subtotal());
			// System.out.printf(product.GetName() + " || " + units + " || "  +  " || " + subtotal());
		}
	}

	private static List<CartLine> cartLines = new ArrayList<>();

	public static void addProduct(Product p, int units) {
		if (p == null || units <= 0 || p.getPrice() < 0) return;
		for (int i = 0; i < cartLines.size(); i++) {
			if (cartLines.get(i).product.getName().equals(p.getName())) {
				System.out.println("Unidades mergeadas: ");
				cartLines.get(i).units += units;
				return;
			}
		}
		CartLine line = new CartLine();
		line.product = p;
		line.units = units;
		line.subtotal();
		cartLines.add(line);
		System.out.println("Línea creada ");
	}
}
