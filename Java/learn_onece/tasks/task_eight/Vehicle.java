package task_eight;

    class Vehicle {
        String brand;
      
        Vehicle(String brand) {
          this.brand = brand;
        }
      
        void startEngine() {
          System.out.println("Generic engine starting sound");
        }
      }
      
      class Car extends Vehicle {
        String model;
      
        Car(String brand, String model) {
          super(brand);  // Call parent class constructor
          this.model = model;
        }
      
        @Override
        void startEngine() {
          super.startEngine();  // Call parent class method
          System.out.println("Car engine ignition sound");
        }
      }
      
      public class Main {
        public static void main(String[] args) {
          Car car1 = new Car("Toyota", "Camry");
          car1.startEngine();
        }
      }
      
