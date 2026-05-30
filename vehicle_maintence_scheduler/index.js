
const axios = require("axios");
const knapsack = require("./scheduler");

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzRnMWEwNTg5QHNyaXQuYWMuaW4iLCJleHAiOjE3ODAxMjQxODYsImlhdCI6MTc4MDEyMzI4NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImRlMGNjYzc2LTkxODgtNDNhYi1hMDMyLWRhM2RlMGUxNGE5MSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im1hbmkgc2FpIiwic3ViIjoiOGUyNWZkY2UtMzFkNy00ZDU4LTgyNmQtN2VjM2FhNWRlYmFhIn0sImVtYWlsIjoiMjM0ZzFhMDU4OUBzcml0LmFjLmluIiwibmFtZSI6Im1hbmkgc2FpIiwicm9sbE5vIjoiMjM0ZzFhMDU4OSIsImFjY2Vzc0NvZGUiOiJTZGtqSkciLCJjbGllbnRJRCI6IjhlMjVmZGNlLTMxZDctNGQ1OC04MjZkLTdlYzNhYTVkZWJhYSIsImNsaWVudFNlY3JldCI6ImdoVHhXWFV2YW5NYmpRQUIifQ.vnyoWOUK8D2bA0irCjPbUqSpPZ-eaXW5snPCYOcCNC4";
async function getDepots() {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }
    );

    return response.data.depots;
}
async function getVehicles() {

    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/vehicles",
        {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }
    );

    return response.data.vehicles;
}
async function main() {

    try {

        const depots = await getDepots();
        const vehicles = await getVehicles();

        for (const depot of depots) {

            const maxImpact = knapsack(
                vehicles,
                depot.MechanicHours
            );

            console.log(
                `Depot ${depot.ID}`
            );

            console.log(
                `Hours: ${depot.MechanicHours}`
            );

            console.log(
                `Maximum Impact: ${maxImpact}`
            );

            console.log("----------------");
        }

    } catch (error) {

        console.error(
            error.response?.data ||
            error.message
        );
    }
}

main();