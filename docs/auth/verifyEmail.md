# Verify Email

There is a link sent to user email when signing up which is to confirm the account and update the `isConfirmed` status to `true`

**URL** : `/api/auth/verify-email/:verifyToken`

**METHOD** : `GET`

#### Success Response:

**code** : **`200`**

```Json

{
    "status": "success",
    "message": "Email verified successfully"
}

```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": "Email is already verified"
}
```

**code** : **`404`**

```json
{
  "status": "fail",
  "code": 400,
  "message": "User not found"
}
```
