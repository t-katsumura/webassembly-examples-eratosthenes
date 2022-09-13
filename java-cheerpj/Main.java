// javac main.java
// jar cvf main.jar *.class
// java -cp main.jar Main

public class Main {

    public static void main(String[] args) {

        if (args.length < 1) {
            System.out.println("no arguments found");
            return;
        }

        int n;
        try {
            n = Integer.parseInt(args[0]);
        } catch (Exception e) {
            System.out.println("failed to parse integer");
            return;
        }

        System.out.println("max prime : " + Prime.prime(n));
    }
}