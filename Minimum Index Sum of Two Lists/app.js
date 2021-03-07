// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Example 3:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 4:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 5:

// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]

const findRestaurant = (list1, list2) => {
    let minIndex = -1
    const result = list1
        .map((d, i) => {
            if (!list2.includes(d)) return
            const indexSum = i + list2.findIndex((s) => s === d)
            minIndex = minIndex < 0 ? indexSum : Math.min(minIndex, indexSum)
            return {
                index: indexSum,
                str: d,
            }
        })
        .filter((d) => {
            if (!d) return
            return d.index === minIndex
        })
        .map((d) => d.str)

    return result
}
