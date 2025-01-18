package java__files;
public class index {
  public static void main(String[] args) {
    for(int i = 1000; i > 0; i -= 7) {
      String result = String.valueOf(i) + " - 7 = ";
      result += String.valueOf(i-7);
      // System.out.println(result);
    }
    System.out.println(App.encrypt("move"));
  }
  public static boolean isPrime(int number) {
    if (number < 2) {
        return false;
    }

    var divider = 2;

    while (divider <= number / 2) {
        if (number % divider == 0) {
            return false;
        }

        divider += 1;
    }

    return true;
  }
}