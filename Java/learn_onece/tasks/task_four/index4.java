package tasks.task_four;

public class index4 {

        // Static attributes (university information)
        private static String universityName = "Default University";
        private static String universityAddress = "Default Address";
      
        // Instance variables
        private int id;
        private String name;
        private double GPA;
      
        // No-Args Constructor
        
        public Student() {
          this.id = 0;
          this.name = "Default Student";
          this.GPA = 0.0;
        }
      
        // Parameterized Constructor
        public Student(int id, String name, double GPA) {
          this.id = id;
          this.name = name;
          this.GPA = GPA;
        }
      
        // Getter and Setter methods
        public int getId() {
          return id;
        }
      
        public void setId(int id) {
          this.id = id;
        }
      
        public String getName() {
          return name;
        }
      
        public void setName(String name) {
          this.name = name;
        }
      
        public double getGPA() {
          return GPA;
        }
      
        public void setGPA(double GPA) {
          this.GPA = GPA;
        }
      
        // Static method to print university information
        public static void printUniversityInfo() {
          System.out.println("University Name: " + universityName);
          System.out.println("University Address: " + universityAddress);
        }
      
        // Instance method to print student information
        public void printStudentInfo() {
          System.out.println("Student ID: " + id);
          System.out.println("Student Name: " + name);
          System.out.println("Student GPA: " + GPA);
        }
      }
      

