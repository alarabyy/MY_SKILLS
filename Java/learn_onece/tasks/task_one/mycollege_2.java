package task_one;

public class mycollege_2 {
    
    private int id ;
    private int age;
    private String name;
    private static String Namecollege = "borg_alarab";
    private static String Department ="information technical";

//no_args constructor
    public mycollege_2(){
        this.id = 0;
        this.age = 0;
        this.name = "not found";
    }
//parameters constructor
    public mycollege_2(int id, int age, String name){
        this.id = id;
        this.age = age;
        this.name = name;
    }
///////////////////////////////////////////////////////////////
// getter and setter methods
    public int getid(){
        return id;
    }
    public void setid(int id){
        this.id = id;
    }

    //----------------------------------------------
    public int getage(){
        return age;
    }
    public void setage(int age){
        this.age = age;
    }
    //----------------------------------------------
    public String getname(){
        return name;
    }
    public void setname(String name){
        this.name = name;
    }
    //----------------------------------------------
    //----------------------------------------------
    //----------------------------------------------
///////////////////////////////////////////////////////////////
// print method
    public void print(){
        System.out.println("your_id:" + id+"\n");
        System.out.println("your_age: " + age+"\n");
        System.out.println(" your_name: " + name+"\n");
          
    }

///////////////////////////////////////////////////////////////

    // Static method to print university information
    public static void printUniversityInformation() {
        System.out.println("University Name: " + Namecollege);
        System.out.println("University department: " + Department);
    }

   // Optional: method to update university information (be cautious with static data)
    public static void updateUniversityInformation(String name, String depart) {
            Namecollege = name;
            Department = depart;
        }}