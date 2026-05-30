

const axios = require("axios");
const getTop10 = require("./priorityInbox");
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzRnMWEwNTg5QHNyaXQuYWMuaW4iLCJleHAiOjE3ODAxMjY4NTAsImlhdCI6MTc4MDEyNTk1MCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNjNmVmNDA2LWM5YTItNGVlZC1iYzE5LTgxYjA1YTc3NGZhMiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbmkgc2FpIiwic3ViIjoiOGUyNWZkY2UtMzFkNy00ZDU4LTgyNmQtN2VjM2FhNWRlYmFhIn0sImVtYWlsIjoiMjM0ZzFhMDU4OUBzcml0LmFjLmluIiwibmFtZSI6Im1hbmkgc2FpIiwicm9sbE5vIjoiMjM0ZzFhMDU4OSIsImFjY2Vzc0NvZGUiOiJTZGtqSkciLCJjbGllbnRJRCI6IjhlMjVmZGNlLTMxZDctNGQ1OC04MjZkLTdlYzNhYTVkZWJhYSIsImNsaWVudFNlY3JldCI6ImdoVHhXWFV2YW5NYmpRQUIifQ.OPpIAt7DbIQMZZjRTSIfpFyBqMMJbNiZMnTIQEr0GxE";
async function fetchNotifications() {

    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        return response.data.notifications;

    } catch (error) {

        console.log(
            error.response?.data || error.message
        );

        return [];
    }
}

async function main() {

    const notifications = await fetchNotifications();

    if (notifications.length === 0) {
        console.log("No notifications found");
        return;
    }

    const top10 = getTop10(notifications);

    console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");

    top10.forEach((notification, index) => {

        console.log(
            `${index + 1}. ${notification.Type}`
        );

        console.log(
            `Message: ${notification.Message}`
        );

        console.log(
            `Time: ${notification.Timestamp}`
        );

        console.log("-----------------------------------");
    });
}

main();