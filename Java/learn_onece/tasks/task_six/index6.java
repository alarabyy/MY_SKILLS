// Interfaces for Single Inheritance
interface Nameable {
    String getName();
    void setName(String name);
}

interface Addressable {
    String getAddress();
    void setAddress(String address);
}

// Base Class (Hierarchical Inheritance)
public class Person implements Nameable { // Single inheritance from Nameable

    private String name;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }
}

// Subclasses (Hierarchical Inheritance)
public class Student extends Person implements Addressable { // Inherits from Person and implements Addressable

    private String address;

    @Override
    public String getAddress() {
        return address;
    }

    @Override
    public void setAddress(String address) {
        this.address = address;
    }
}

public class Employee extends Person { // Inherits from Person

    private String department;

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
