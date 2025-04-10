| Method           | Use Case               | Code Example                             | Output         |
|------------------|------------------------|------------------------------------------|----------------|
| `map()`          | Transform elements     | `[1,2,3].map(x => x * 2)`                 | `[2, 4, 6]`    |
| `filter()`       | Filter elements        | `[1,5,10].filter(x => x > 5)`             | `[10]`         |
| `reduce()`       | Sum or reduce values   | `[1,2,3].reduce((a,b) => a + b, 0)`       | `6`            |
| `forEach()`      | Loop through array     | `[1,2].forEach(x => console.log(x))`      | Prints 1, 2    |
| `find()`         | First matching value   | `[1,2,3].find(x => x > 1)`                | `2`            |
| `some()`         | Any match?             | `[1,2,3].some(x => x > 2)`                | `true`         |
| `every()`        | All match?             | `[1,2,3].every(x => x > 0)`               | `true`         |
| `includes()`     | Value in array?        | `[1,2,3].includes(2)`                     | `true`         |
| `Set()`          | Unique values only     | `[...new Set([1,2,2,3])]`                 | `[1, 2, 3]`    |
| `Object.keys()`  | Get keys from object   | `Object.keys({a: 1, b: 2})`               | `["a", "b"]`   |
| `Object.values()`| Get values from object | `Object.values({a: 1, b: 2})`             | `[1, 2]`       |
| `entries()`      | Key-value pairs        | `Object.entries({a: 1})`                  | `[["a", 1]]`   |
| `Array.from()`   | Convert to array       | `Array.from("abc")`                       | `["a", "b", "c"]` |
| `Array.isArray()`| Check if it's array    | `Array.isArray([1, 2])`                   | `true`         |
| `flat()`         | Flatten nested arrays  | `[1, [2, [3]]].flat(2)`                   | `[1, 2, 3]`    |
| `flatMap()`      | Map + flatten          | `[1, 2].flatMap(x => [x, x * 2])`         | `[1, 2, 2, 4]` |
| `sort()`         | Sort array values      | `[3, 1, 2].sort((a, b) => a - b)`         | `[1, 2, 3]`    |
| `splice()`       | Remove/insert values   | `let a = [1,2,3]; a.splice(1,1)`          | `a = [1, 3]`   |
| `slice()`        | Extract part of array  | `[1, 2, 3].slice(1, 3)`                   | `[2, 3]`       |
| `join()`         | Join array to string   | `[1, 2, 3].join("-")`                     | `"1-2-3"`      |
