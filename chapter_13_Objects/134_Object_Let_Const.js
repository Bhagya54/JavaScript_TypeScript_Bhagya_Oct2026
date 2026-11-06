let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);//{ browser: 'Firefox', timeout: 5000, retries: 2 }

//reassignment allowed
config1 = { browser: "Safari" };
console.log(config1);

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

//config = { browser: "Safari" }; - TypeError: Assignment to constant variable.
//console.log(config);