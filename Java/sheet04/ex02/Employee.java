package sheet04.ex02;

public class Employee {
	String name;
	double salaryByHours;

	public void calcSalary(int hours) {	}
	public void calcSalary() {	}


	public static class EmployeeByHours extends Employee {
		@Override
		public void calcSalary(int hours) {
			double totalSalary = hours * salaryByHours;
			System.out.println("El salario del empleado " + name + " por " + hours + "  horas trabajadas este mes es: " + totalSalary + " euros.");
		}
	}

	public static class EmployeeFullTime extends Employee {
		int bonusPercentage = 20;
		int hoursByMonth = 160;
		@Override
		public void calcSalary() {
			double totalSalary = salaryByHours + (salaryByHours * bonusPercentage / 100) * hoursByMonth;
			System.out.println("El salario del empleado " + name + " a tiempo completo este mes es: " + totalSalary + " euros.");
		}
	}
}
