# Explanation: `retryCount: parseInt(process.env.RETRY_COUNT || '3', 10)`

This line sets the `retryCount` property of a config object from an environment variable, with a fallback.

## Breakdown

| Part | Meaning |
|------|---------|
| `retryCount:` | Object property being set. |
| `process.env.RETRY_COUNT` | Reads env variable `RETRY_COUNT`. Always a **string**, or `undefined` if not set. |
| `\|\| '3'` | Default. If the variable is missing (or empty string), use `'3'`. |
| `parseInt(..., 10)` | Converts the string to an integer. The `10` means base-10 (decimal). |

## Evaluation order

1. `process.env.RETRY_COUNT || '3'` runs first, giving a string.
2. `parseInt(thatString, 10)` turns it into a number.

## Examples

| `RETRY_COUNT` value | Result |
|---------------------|--------|
| not set | `3` |
| `"80"` | `80` |
| `""` (empty) | `3` (empty string is falsy) |
| `"abc"` | `NaN` (`parseInt` fails, `NaN` is not caught by `\|\|`) |

## Why parseInt?

Env values are always strings. `"80" + 1` gives `"801"`, not `81`. Converting up front avoids bugs in math and comparisons.

## Why the `10` radix?

Without it, `parseInt` may guess the base from the string's prefix (for example `0x` means hex). Passing `10` removes the guesswork.

---

## How to set `RETRY_COUNT` using a `.env` file

### Step 1: Create `.env` in the project root

Create a file named `.env` with:

```
RETRY_COUNT=80
```

### Step 2: Load it with `dotenv`

Node doesn't load `.env` automatically. Use the `dotenv` package, which works on any Node version.

1. Install it from the project root:

   ```
   npm i dotenv
   ```

2. Add this at the very top of `133_Objects_Real.js`, before any use of `process.env`:

   ```js
   require('dotenv').config();
   ```

### Step 3: Run from the project root

```
node chapter_13_Objects/133_Objects_Real.js
```

`retryCount` is now `80` instead of the default `3`.

> Add `.env` to `.gitignore` so secrets don't get committed.
