package task_sesven;

public class index7 {
    public abstract class Person {

        // 1. Must be declared with the abstract keyword
        public abstract String getName();
      
        // 2. Can have non-abstract methods
        public void introduce() {
          System.out.println("Hello, I am a person!");
        }
      
        // 3. Can have constructors (might be private)
        private Person(String name) { // This constructor can be private to prevent direct instantiation
          this.name = name;
        }
      
        // 4. Can have static methods
        public static void printStaticInfo() {
          System.out.println("This is static information from the Person class.");
        }
      
        // 5. Cannot be instantiated (achieved through rule 1 and potentially private constructor)
      
        // Private field (assuming name is essential but not exposed directly)
        private String name;
      }
      
}
