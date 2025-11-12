package sheet02.ex04;

import java.text.DecimalFormat;

public class Temperaturas {

	static float[][] tempData = {
		{23.5f, 25.2f, 21.1f ,24.2f ,26.6f, 28.9f , 27.2f}, 
		{20.3f, 30.0f, 20.2f, 21.9f, 23.6f, 24.5f, 25.2f}, 
		{23.3f, 25.4f, 19.0f, 17.7f, 15.6f, 16.9f, 20.0f}
	};

	public static void main(String[] var0) {
		mostrarPromedioSemanal(tempData);
	}

	public static void mostrarPromedioSemanal(float[][] datos) {
		float weekAvg = 0;
		DecimalFormat df = new DecimalFormat("#.#");

		for (int i = 0; i < datos.length; i++) {
			for (float num : datos[i]) {
				weekAvg += num;
			}
			weekAvg /= datos[i].length;
			System.out.println("Promedio Semana " + i + ": " +  df.format(weekAvg) + " Cº");
		}
	}
}
