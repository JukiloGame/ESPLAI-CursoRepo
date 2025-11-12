package sheet02.ex03;

public class PromedioArray {
	static int[] numbers = {4, 8, 6, 2};

	public static void main(String[] var0) {
		System.out.println(calcularPromedio(numbers));
	}
	public static double calcularPromedio(int[] numeros) {
		double total = 0;
		for (int number: numeros) {
			total += number;
		}
		return total / numeros.length;
	}
}
