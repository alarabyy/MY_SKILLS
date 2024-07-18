package task_one;

// assignments_1

public class assiment_1 {
    public static void main(String[] args) {

            mycollege_2 col1 =new mycollege_2();
            col1.print();

            mycollege_2 col2 =new mycollege_2(1, 20,"alaraby" );
            col2.print();
            System.out.println("-------------------------");


            mycollege_2.printUniversityInformation();
            System.out.println("-------------------------");
            mycollege_2.printUniversityInformation();
            mycollege_2.updateUniversityInformation("borg alarab 2","it");
            
    }
}
