package sheet04.ex01;

abstract class Animal {
	void emitirSonido() {
	}

	public class Dog extends Animal {
		@Override
		public void emitirSonido() {
			System.out.println("Guau guau");
		}
	}

	public class Cat extends Animal {
		@Override
		public void emitirSonido() {
			System.out.println("Miau");
		}
	}

	public class Duck extends Animal {
		@Override
		public void emitirSonido() {
			System.out.println("Cuack Cuack");
		}
	}
}
