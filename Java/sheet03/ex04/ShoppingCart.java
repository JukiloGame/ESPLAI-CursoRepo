package sheet03.ex04;
import sheet03.ex01_02.Product;

public class ShoppingCart {
	public class CartLine {
		Product product;
		int units;
		double subtotal() { return product.GetPrice() * units; }
	}
}
