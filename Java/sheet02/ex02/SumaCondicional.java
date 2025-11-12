package sheet02.ex02;

public class SumaCondicional {
	public static void main(String[] var0) {
		sumarSiPositivo(1, 3);
		sumarSiPositivo(-2, 4);
	}

	public static void sumarSiPositivo(int num1, int num2) {
		int total = 0;
		if (num1 > 0 && num2 > 0) {
			total = num1 + num2;
		}
		System.out.println(total);
	}
}
