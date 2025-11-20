package sheet04.ex01;

public class App {
	public static void main(String[] args) {
		Animal[] animal = new Animal[3];
		
		animal[1] = new Animal.Dog();
		animal[0] = new Animal.Cat();
		animal[2] = new Animal.Duck();
		
		for (int i = 0; i < animal.length; i++) {
			animal[i].emitirSonido();
		}
		
	}
}

