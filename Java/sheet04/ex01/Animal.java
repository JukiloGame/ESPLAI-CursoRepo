package sheet04.ex01;

abstract public class Animal {
	void emitirSonido() {
	}

	public static class Dog extends Animal {
		@Override
		public void emitirSonido() {
			System.out.println("Guau guau");
		}
	}

	public static class Cat extends Animal {
		@Override
		public void emitirSonido() {
			System.out.println("Miau");
		}
	}

	public static class Duck extends Animal {
		@Override
		public void emitirSonido() {
			System.out.println("Cuack Cuack");
		}
	}
}
