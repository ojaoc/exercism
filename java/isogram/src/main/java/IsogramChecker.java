import java.util.ArrayList;

class IsogramChecker {

    boolean isIsogram(String phrase) {
        
        String regexPattern = "[^a-zA-Z]+";

        String formatedPhrase = phrase.replaceAll(regexPattern, "").toLowerCase();

        ArrayList<String> characters = new ArrayList<>();  

        for (int i = 0; i < formatedPhrase.length(); i++) {
 
            String currentChar = String.valueOf(formatedPhrase.charAt(i));
            
            if (characters.contains(currentChar)) {

                return false;

            };

            characters.add(currentChar);

        }

        return true;

    }

}
