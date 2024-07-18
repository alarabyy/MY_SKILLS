package task_eight;

    class Circle {
        private final double PI = 3.14159;  // Final constant variable
        private final int radius;  // Final instance variable
      
        Circle(int radius) {
          this.radius = radius;
        }
      
        // Cannot override final methods in subclasses
        final double calculateArea() {
          return PI * radius * radius;
        }
      }
      
      public class Main {
        public static void main(String[] args) {
          Circle circle = new Circle(7);
          double area = circle.calculateArea();
          System.out.println("Area of circle: " + area);
        }
      }
      
