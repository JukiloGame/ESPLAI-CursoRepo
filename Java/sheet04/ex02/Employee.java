package sheet04.ex02;

public class Employee {
	String name;
	double salaryByHours;

	public void calcSalary() {

	}

	public static class EmployeeByHours extends Employee {
		int hoursWorked;

		@Override
		public void calcSalary() {
			double totalSalary = hoursWorked * salaryByHours;
			System.out.println("El salario del empleado por horas " + name + " es: " + totalSalary + " euros.");
		}
	}

	public static class EmployeeFullTime extends Employee {
		int bonusPercentage = 20;
		@Override
		public void calcSalary() {
			double totalSalary = salaryByHours + (salaryByHours * bonusPercentage / 100);
			System.out.println("El salario del empleado a tiempo completo " + name + " es: " + totalSalary + " euros.");
		}
	}
}
