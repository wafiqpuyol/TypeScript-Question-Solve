/**
 *  In this exercise, we've an object searchParams. And trynna fetch "id" value.
 *  But in this case "id" is null. How can we fix that issue.
 *
 *
 */

// Question ⬇⬇⬇

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
console.log(id.toUpperCase());

/**
 * Possible Solutions => [optional_chaining, null_assertion, type_guard]
 */

// Solution-1 ⬇⬇⬇
console.log(id?.toUpperCase());

// Solution-2 ⬇⬇⬇
console.log(id!.toUpperCase());

// Solution-3 ⬇⬇⬇
if (typeof id !== null) console.log(id);
export {};
