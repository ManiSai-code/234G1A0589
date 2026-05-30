const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
};

function getTop10(notifications) {

    const scoredNotifications = notifications.map(notification => {

        const timestamp = new Date(notification.Timestamp).getTime();

        const recencyScore = timestamp / 1000000;

        const priorityScore =
            (weights[notification.Type] || 0) * 1000000 +
            recencyScore;

        return {
            ...notification,
            priorityScore
        };
    });

    scoredNotifications.sort(
        (a, b) => b.priorityScore - a.priorityScore
    );

    return scoredNotifications.slice(0, 10);
}

module.exports = getTop10;