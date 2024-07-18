package syntax.task_five;

public class index5 {
public static void main(String[] args) {
    Employee em = new Employee(357,"alaraby",25522.25,);
    em.setId(357);
    em.setName("alaraby");
    em.setAddress(25522.25);
    em.setSalary(33200);

    System.out.println(em.getId()+"\n");
    System.out.println(em.getName()+"\n");
    System.out.println(em.getAddress()+"\n");
    System.out.println(em.getSalary());
}
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
public class Employee {

    // Data members (private for encapsulation)
    private int id;
    private String name;
    private double salary;
    private String address;
  
    // Constructor to initialize data members
    public Employee(int id, String name, double salary, String address) {
      this.id = id;
      this.name = name;
      this.salary = salary;
      this.address = address;
    }
  
    // Getter methods to access data members (public for access)
    public int getId() {
      return id;
    }
  
    public String getName() {
      return name;
    }
  
    public double getSalary() {
      return salary;
    }
  
    public String getAddress() {
      return address;
    }
  
    // Setter methods to modify data members (public for access, with validation if needed)
    public void setId(int id) {
      this.id = id;
    }
  
    public void setName(String name) {
      this.name = name;
    }
  
    public void setSalary(double salary) {
      // You can add validation here to ensure a positive salary
      if (salary > 0) {
        this.salary = salary;
      } else {
        System.out.println("Error: Salary cannot be negative.");
      }
    }
  
    public void setAddress(String address) {
      this.address = address;
    }
  }
  
