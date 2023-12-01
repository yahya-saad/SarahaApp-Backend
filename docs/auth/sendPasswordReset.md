# Send Password Reset Link

**URL** : `/api/auth/password-reset`

**METHOD** : `POST`

#### Body:

```json
{
  "email": "yhya@email.com"
}
```

#### Success Response:

**code** : **`200`**

```Json
{
    "status":"success",
    "message":"password reset link sent to your email account"
}

```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": ["\"email\" is required", "\"email\" must be a valid email"]
}
```

```json
{
  "status": "fail",
  "code": 400,
  "message": "Wait 1 hour to send another link"
}
```

**code** : **`404`**

```json
{
  "status": "fail",
  "code": 400,
  "message": "user with given email doesn't exist"
}
```
