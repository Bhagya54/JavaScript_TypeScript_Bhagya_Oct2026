# JavaScript String Cheatsheet

Strings are immutable: every method returns a new string.

## Length & Access

| Method | What it does | Example | Result |
|---|---|---|---|
| `length` | Number of UTF-16 code units in the string | `"hello".length` | `5` |
| `at(i)` | Char at index; negative counts from end | `"hello".at(-1)` | `"o"` |
| `charAt(i)` | Char at index; `""` if out of range | `"hello".charAt(1)` | `"e"` |
| `charCodeAt(i)` | UTF-16 code of char at index | `"A".charCodeAt(0)` | `65` |
| `codePointAt(i)` | Full Unicode code point (handles emoji) | `"😀".codePointAt(0)` | `128512` |
| `str[i]` | Bracket access; `undefined` if out of range | `"hello"[0]` | `"h"` |

## Search

| Method | What it does | Example | Result |
|---|---|---|---|
| `indexOf(s)` | Index of first occurrence, or `-1` | `"hello".indexOf("l")` | `2` |
| `lastIndexOf(s)` | Index of last occurrence, or `-1` | `"hello".lastIndexOf("l")` | `3` |
| `includes(s)` | Is substring present? | `"hello".includes("ell")` | `true` |
| `startsWith(s)` | Does string begin with `s`? | `"hello".startsWith("he")` | `true` |
| `endsWith(s)` | Does string end with `s`? | `"hello".endsWith("lo")` | `true` |
| `search(re)` | Index of first regex match, or `-1` (position only) | `"hello".search(/l/)` | `2` |
| `match(re)` | Match text(s); with `/g` returns all as plain strings, else first with groups; `null` if none | `"a1b2".match(/\d/g)` | `["1","2"]` |
| `matchAll(re)` | Iterator of every match with index and groups; needs `/g` | `[..."a1b2".matchAll(/\d/g)].length` | `2` |

## Extract

| Method | What it does | Example | Result |
|---|---|---|---|
| `slice(s, e)` | Substring from `s` up to (not incl.) `e`; negatives count from end | `"hello".slice(1, 3)` | `"el"` |
| `slice(-n)` | Last `n` chars | `"hello".slice(-2)` | `"lo"` |
| `substring(s, e)` | Like `slice`, but negatives become `0` and args swap if `s > e` | `"hello".substring(1, 3)` | `"el"` |
| `substr(s, len)` *(deprecated)* | Substring from `s` of length `len`; avoid in new code | `"hello".substr(1, 3)` | `"ell"` |

## Modify

| Method | What it does | Example | Result |
|---|---|---|---|
| `toUpperCase()` | All chars to upper case | `"hi".toUpperCase()` | `"HI"` |
| `toLowerCase()` | All chars to lower case | `"HI".toLowerCase()` | `"hi"` |
| `toLocaleUpperCase()` | Upper case using locale rules | `"i".toLocaleUpperCase("tr")` | `"İ"` |
| `toLocaleLowerCase()` | Lower case using locale rules | `"I".toLocaleLowerCase("tr")` | `"ı"` |
| `trim()` | Remove whitespace from both ends | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | Remove leading whitespace | `"  hi".trimStart()` | `"hi"` |
| `trimEnd()` | Remove trailing whitespace | `"hi  ".trimEnd()` | `"hi"` |
| `padStart(n, c)` | Pad on the left with `c` until length `n` | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(n, c)` | Pad on the right with `c` until length `n` | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(n)` | Repeat string `n` times | `"ab".repeat(3)` | `"ababab"` |
| `concat(s)` | Join strings; same as `+` | `"a".concat("b", "c")` | `"abc"` |
| `normalize()` | Unify equivalent Unicode forms (NFC by default); "A" + combining ring (2 chars) becomes "Å" (1 char) | `String.fromCharCode(65, 778).normalize().length` | `1` |

## Replace

| Method | What it does | Example | Result |
|---|---|---|---|
| `replace(a, b)` | Replace first match of string/regex | `"aaa".replace("a", "b")` | `"baa"` |
| `replace(/re/g, b)` | Replace every regex match | `"aaa".replace(/a/g, "b")` | `"bbb"` |
| `replaceAll(a, b)` | Replace every match (string or `/g` regex) | `"aaa".replaceAll("a", "b")` | `"bbb"` |

## Split & Join

| Method | What it does | Example | Result |
|---|---|---|---|
| `split(sep)` | Cut into array at each separator | `"a,b,c".split(",")` | `["a","b","c"]` |
| `split("")` | Split into individual UTF-16 chars | `"abc".split("")` | `["a","b","c"]` |
| `split(sep, limit)` | Split, keeping at most `limit` pieces | `"a,b,c".split(",", 2)` | `["a","b"]` |
| `Array.join(sep)` | Array method: glue items into a string with `sep` | `["a","b"].join("-")` | `"a-b"` |

## Compare

| Method | What it does | Example | Result |
|---|---|---|---|
| `localeCompare(s)` | Locale-aware order: `-1`, `0`, or `1` | `"a".localeCompare("b")` | `-1` |
| `===` | Strict equality, case-sensitive | `"a" === "a"` | `true` |

## Convert

| Method | What it does | Example | Result |
|---|---|---|---|
| `String(x)` | Convert any value to string | `String(42)` | `"42"` |
| `toString()` | Convert value to string; fails on `null`/`undefined` | `(42).toString()` | `"42"` |
| `Number(s)` | Strict string-to-number; `NaN` if any junk | `Number("42")` | `42` |
| `parseInt(s, 10)` | Read leading integer, stop at first bad char | `parseInt("42px", 10)` | `42` |
| `parseFloat(s)` | Read leading decimal number | `parseFloat("3.14px")` | `3.14` |
| `[...str]` | Spread into array of code points (emoji-safe) | `[..."abc"]` | `["a","b","c"]` |
| `String.fromCharCode(n)` | Build string from UTF-16 codes | `String.fromCharCode(65)` | `"A"` |
| `String.fromCodePoint(n)` | Build string from Unicode code points | `String.fromCodePoint(128512)` | `"😀"` |
| `String.raw` | Template tag: keep backslashes unprocessed | ``String.raw`a\nb` `` | `"a\\nb"` |

## Template Literals

| Feature | What it does | Example | Result |
|---|---|---|---|
| Interpolation | Embed expressions with `${}` | `` `Hi ${"Bob"}` `` | `"Hi Bob"` |
| Multiline | Backtick strings can span lines | `` `a\nb` `` | two lines |

## Well-formed Unicode (ES2024)

| Method | What it does | Example | Result |
|---|---|---|---|
| `isWellFormed()` | Check for lone surrogates | `"ok".isWellFormed()` | `true` |
| `toWellFormed()` | Replace lone surrogates with the replacement char U+FFFD | `String.fromCharCode(0xD800).toWellFormed()` | `"�"` |

## Quick Tips

- `slice` beats `substring`: negative indexes work, no arg swapping.
- `replaceAll` or `/re/g` replaces every match; plain `replace` only the first.
- `Number("42px")` gives `NaN`; `parseInt("42px", 10)` gives `42`.
- Always pass a radix to `parseInt`.
- `search` = where, `match(/…/g)` = what, `matchAll` = what + where + groups.
