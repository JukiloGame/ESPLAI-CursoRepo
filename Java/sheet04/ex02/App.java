package sheet04.ex02;

public class App {
	public static void main (String[] args) {
		Employee[] employees = new Employee[3];
		employees[0] = new Employee.EmployeeByHours();
		employees[0].name = "Juan";
		employees[0].salaryByHours = 15.0;
		employees[0].calcSalary();
		
		employees[1] = new Employee.EmployeeFullTime();
		employees[1].name = "Ana";
		employees[1].salaryByHours = 15.0;
		employees[1].calcSalary();
		
		employees[2] = new Employee.EmployeeByHours();
		employees[2].name = "Luis";
		employees[2].salaryByHours = 40;
		employees[2].calcSalary();

		
	}
}
