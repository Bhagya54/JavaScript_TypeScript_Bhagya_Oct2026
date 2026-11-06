require('dotenv').config()
const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body:
    {
        user:
        {
            role: "admin", active: true
        }
    }
}

//console.log(EXPECTED_RESPONSE.body.user.role)

const config = {
    //base urls
    baseUrl: "http://localhost:3000",
    apiBaseUrl: "http://localhost:3000/api",

    testUser: {
        username: "testuser@example.com",
        password: "SecurePass123"
    },

    //logging
    loglevel: "INFO",

    //retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10)
}

console.log(config.retryCount)