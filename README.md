# JavaScript & TypeScript Learning Journey

A hands-on, chapter-by-chapter collection of JavaScript and TypeScript practice files. Each
chapter contains numbered `.js` files that build on the previous ones, moving from language
basics through arrays, functions, and eventually TypeScript.

## How to Run

Any file can be executed directly with Node.js:

```bash
node chapter_10_Arrays/91_Checking_Array.js
```

## Curriculum

| Chapter | Topic |
| --- | --- |
| `chapter_01_Basics` | Setup verification and running your first JavaScript |
| `chapter_02_JavaScriptConcepts` | Core JavaScript concepts and fundamentals |
| `chapter_03_Identifier_Literals` | Identifier rules, naming conventions, comments, VS Code shortcuts |
| `chapter_04_var_let_const_scope` | `var` / `let` / `const`, block vs function scope, hoisting |
| `chapter_05_Literal` | Literals, `null` vs `undefined`, number and string literals, template literals |
| `chapter_06_Operators` | Assignment, arithmetic, modulus, exponent, comparison, logical, ternary, typeof, nullish, increment/decrement |
| `chapter_07_ControlStatements` | `if` / `else if` / `else` with real-world and interview-style examples |
| `chapter_08_switch_statement` | `switch`, `break`, `default`, grouping cases, interview questions |
| `chapter_09_Loops` | `for`, `while`, `do-while`, retry patterns, interview questions |
| `chapter_10_Arrays` | Creating, accessing, modifying, searching, iterating, transforming, sorting, slicing, checking arrays |
| `chapter_11_Functions` | Functions (coming soon) |

## Chapter 10 — Arrays

| File | What it covers |
| --- | --- |
| `78_Arrays.js` | What an array is and why we use it |
| `79_WaysToCreateArray.js` | Different ways to create arrays |
| `80_Access_Array.js` | Accessing elements by index |
| `81_Add_Remove_Array.js` | Adding and removing elements (`push`, `pop`, `shift`, `unshift`) |
| `82_Splice_Array.js` | `splice()` — add/remove at any position |
| `83_Real_Example.js` | Real-world usage examples |
| `84_Search_Array.js` | Searching (`indexOf`, `includes`, `find`) |
| `85_Iterate_Over_Array.js` | Iteration with `for`, `for...of`, `forEach`, `for...in`, `entries()` |
| `86_Transform_Array.js` | `map()`, `filter()`, `reduce()`, `flat()` |
| `87_Array_Sort.js` | Sorting arrays |
| `88_Array_Slicing.js` | `slice()` for copying/extracting |
| `89_Arry_SpliceVsSlice.js` | `splice()` vs `slice()` side by side |
| `90_Array_Concat.js` | Concatenating arrays |
| `91_Checking_Array.js` | `Array.isArray()`, `every()`, `some()` — with a Playwright-style API status check example |

## Notes

- Files are numbered in learning order across the whole repository.
- Many examples use QA/testing scenarios (API status codes, test suites, retries) to make the
  concepts practical.
