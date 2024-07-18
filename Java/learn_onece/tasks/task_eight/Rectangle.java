package task_eight;

    class Rectangle {
        private int width;
        private int height;
      
        // Constructor with arguments
        Rectangle(int width, int height) {
          // Differentiate between constructor parameters and instance variables using this
          this.width = width;
          this.height = height;
        }
      
        // Method to calculate and print area
        void calculateArea() {
          int area = this.width * this.height;
          System.out.println("Area of rectangle: " + area);
        }
      }
      
      public class Main {
        public static void main(String[] args) {
          Rectangle rect = new Rectangle(5, 3);
          rect.calculateArea();
        }
      }
      
