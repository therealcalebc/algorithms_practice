/*
 * Template for using hash map to find duplicates.
 * Replace ReturnType with the actual type of your return value.
 * Example problems:
 * 1. Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 2. Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 */
ReturnType aggregateByKey_hashmap(List<Type>& keys) {
    // Replace Type and Type with actual type(s) of your key and value
    Map<Type, Type> hashmap = new HashMap();
    for (Type key : keys) {
        if (hashmap.containsKey(key)) {
			// EITHER...
            hashmap.put(key, updated_information);
			// ...OR...
            if (hashmap.get(key) satisfies the requirement) {
                return needed_information;
            }
        }
        // Value can be any information you needed (e.g. index)
        hashmap.put(key, value);
    }
	// ...Add logic for needed_information if necessary...
    return needed_information;
}