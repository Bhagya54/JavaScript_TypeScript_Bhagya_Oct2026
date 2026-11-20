# Promise.all vs Promise.allSettled

Reference: [157_Promise_All.js](157_Promise_All.js)

## Quick Difference

| | `Promise.all` | `Promise.allSettled` |
|---|---|---|
| Resolves when | **All** promises fulfill | **All** promises finish (fulfilled or rejected) |
| Rejects when | **Any one** promise rejects (fail-fast) | **Never** rejects |
| Result | Array of values | Array of `{status, value/reason}` objects |
| On rejection | Returns only the first reason; other results lost | Every result kept |
| Use for | All must succeed (health checks) | Need full report (test results) |

## Promise.all

Waits for every promise. If one rejects, whole thing rejects at once with that reason.

### All fulfilled

```js
Promise.all([checkAuth, checkDB, checkCache])
    .then(msg => console.log(`All Checks are successful:[${msg}]`))
    .catch(error => console.log("Some Check got failed:", error))
```

Output:

```
All Checks are successful:[Auth OK,DB OK,Cache OK]
```

### One rejected

```js
Promise.all([
    Promise.resolve("Auth OK"),
    Promise.reject("DB Down"),
    Promise.resolve("Cache OK")
])
```

Output:

```
Some Check got failed: DB Down
```

`.catch` runs. `Auth OK` and `Cache OK` are thrown away.

## Promise.allSettled

Waits for every promise, whatever the outcome. Always goes to `.then`.

```js
Promise.allSettled([
    Promise.resolve("TestCase A Passed"),
    Promise.reject("TestCase B Failed"),
    Promise.resolve("TestCase C Passed")
])
    .then(results => {
        results.forEach((result, index) => {
            console.log(`Test ${index + 1} : ${result.status} - ${result.value || result.reason}`)
        })
    })
```

Result array shape:

```js
[
  { status: 'fulfilled', value: 'TestCase A Passed' },
  { status: 'rejected',  reason: 'TestCase B Failed' },
  { status: 'fulfilled', value: 'TestCase C Passed' }
]
```

- `status`: `'fulfilled'` or `'rejected'`
- `value`: present only when fulfilled
- `reason`: present only when rejected

## When to Use Which

- **`Promise.all`** — one failure makes the whole task pointless. Example: Auth, DB, Cache must all be up before app starts.
- **`Promise.allSettled`** — want outcome of every task, even failed ones. Example: test report; run all tests, don't stop at first failure.

## Note

Order of results always matches order of input array in both methods, not completion order.
