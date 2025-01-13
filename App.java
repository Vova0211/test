public class App {
  public static boolean Prime(int number) {
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
    public static String encrypt(String str) {
        // BEGIN (write your solution here)
        String result = "";
        for(int i = 0; i < str.length(); i++) {
            if (str.length() % 2 == 0) {
                if(i % 2 == 0) {
                    result += str.charAt(i+1);
                } else {
                    result += str.charAt(i-1);
                }
            } else {
                if (i == (str.length() - 1)) {
                    result += str.charAt(i);
                } else if(i % 2 == 0){
                    result += str.charAt(i+1);
                } else {
                    result += str.charAt(i-1);
                }
            } 
        }
        return result;
        // END
    }
}

