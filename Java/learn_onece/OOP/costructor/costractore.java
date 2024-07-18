package OOP.costructor;

public class costractore {
        int modelYear=2024;
        String modelName;
        public Main(String name) {
        modelName = name;
        }
        public Main(int year, String name) {
        modelYear = year;
        modelName = name;
        }
        public static void main(String[] args) {
        Main myCar1 = new Main("Mercedes");
        System.out.println(myCar1.modelYear + " " + myCar1.modelName);
        Main myCar2 = new Main(2020, "BMW");
        System.out.println(myCar2.modelYear + " " + myCar2.modelName);
        }
        
        
}
