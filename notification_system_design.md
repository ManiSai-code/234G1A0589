# Stage 1

## Notification Platform REST API Design

### 1. Get Notifications

**Endpoint**

```http
GET /api/notifications
```

**Headers**

```json
{
  "Authorization": "Bearer <token>"
}
```

**Response**

```json
{
  "notifications": [
    {
      "id": "123",
      "type": "Placement",
      "message": "Amazon Hiring Drive",
      "isRead": false,
      "createdAt": "2026-05-30T10:00:00Z"
    }
  ]
}
```

---

### 2. Get Unread Notifications

**Endpoint**

```http
GET /api/notifications/unread
```

**Headers**

```json
{
  "Authorization": "Bearer <token>"
}
```

---

### 3. Mark Notification as Read

**Endpoint**

```http
PATCH /api/notifications/{id}/read
```

**Headers**

```json
{
  "Authorization": "Bearer <token>"
}
```

**Response**

```json
{
  "message": "Notification marked as read"
}
```

---

### 4. Create Notification

**Endpoint**

```http
POST /api/notifications
```

**Request**

```json
{
  "type": "Placement",
  "message": "Amazon Hiring Drive"
}
```

**Response**

```json
{
  "message": "Notification created successfully"
}
```

---

### 5. Delete Notification

**Endpoint**

```http
DELETE /api/notifications/{id}
```

**Response**

```json
{
  "message": "Notification deleted successfully"
}
```

---

## Real-Time Notification Mechanism

I would use WebSockets for real-time notification delivery.

Workflow:

1. Student logs in.
2. Frontend establishes a WebSocket connection.
3. Backend pushes notifications instantly.
4. Student receives notifications without refreshing the page.

Advantages:

* Real-time communication
* Reduced server load compared to polling
* Better user experience
