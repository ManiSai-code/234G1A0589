const axios = require("axios");

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzRnMWEwNTg5QHNyaXQuYWMuaW4iLCJleHAiOjE3ODAxMjE1OTQsImlhdCI6MTc4MDEyMDY5NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjE1MzI4NzE1LTVmNGQtNDQ5MS1hNjRkLWQ2NDBkNTQxMWJjZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbmkgc2FpIiwic3ViIjoiOGUyNWZkY2UtMzFkNy00ZDU4LTgyNmQtN2VjM2FhNWRlYmFhIn0sImVtYWlsIjoiMjM0ZzFhMDU4OUBzcml0LmFjLmluIiwibmFtZSI6Im1hbmkgc2FpIiwicm9sbE5vIjoiMjM0ZzFhMDU4OSIsImFjY2Vzc0NvZGUiOiJTZGtqSkciLCJjbGllbnRJRCI6IjhlMjVmZGNlLTMxZDctNGQ1OC04MjZkLTdlYzNhYTVkZWJhYSIsImNsaWVudFNlY3JldCI6ImdoVHhXWFV2YW5NYmpRQUIifQ.ck09fLX4qjyLh1qF48Dpx9PXXr8AQ6dY-Xcg9k0xT0U";

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        console.log("Log Created:", response.data);

        return response.data;

    } catch (error) {

        console.error(
            "Logging Error:",
            error.response?.data || error.message
        );
    }
}

module.exports = Log;