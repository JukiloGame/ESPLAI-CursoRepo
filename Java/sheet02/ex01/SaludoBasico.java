package Java.sheet02.ex01;

public class SaludoBasico {	
	public static void main(String[] args) {
		eco("Hola", 3);
	}

	public static void eco (String word, int repeat) {
		for (int i = 0; i < repeat; i++) {
			System.out.println(word);
		}
	}
}
