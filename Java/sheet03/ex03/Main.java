package sheet03.ex03;

public class Main {
	public static void main(String[] args) {
		Alumno alumno1 = new Alumno();
		// ! Si no añadimos constructor, Java añade por defecto un constructor vacio, y al haberlo hecho con parámetros, no encuentra un
		//! constructor que coincida con Alumno();. 
		//! En cambio, si creamos un constructor explicito, Java lo encuentra y lo usa.
	}
}
