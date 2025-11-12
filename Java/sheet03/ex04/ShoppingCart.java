package sheet03.ex04;
import sheet03.ex01_02.Product;
import java.util.List;
import java.util.ArrayList;

public class ShoppingCart {
	private class CartLine {
		Product product;
		int units;
		double subtotal() { return product.GetPrice() * units; }
	}

	private List<CartLine> cartLines = new ArrayList<>();

	
}
