package task_two;

public class Borg_El_Arab {
    private int id;
    private int age;
    private String name;
    private float gpa;
    private static  String namecollage = "Borg El-Arab University";

    public Borg_El_Arab(int id, int age, String name, float gpa ) 
    {
        this.id = id;
        this.age = age;
        this.name = name;
        this.gpa = gpa;
    }
  
    public void getdataa()
    { 
        System.out.println("id :" + id);
        System.out.println("age :" + age);
        System.out.println("name :" + name);
        System.out.println("gpa :" + gpa);
        System.out.println("namecollage :" + namecollage);
     
    }

}
