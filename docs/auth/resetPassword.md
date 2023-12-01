# Reset Password

**URL** : `/api/auth/password-reset/:token`

**METHOD** : `POST`

#### Body:

```json
{
  "password": "...",
  "confirmPassword": "..."
}
```

#### Success Response:

**code** : **`200`**

```Json
{
    "status":"success",
    "message":"password reset sucessfully."
}

```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": [
    "\"password\" is required",
    "\"confirmPassword\" is required",
    "Password and ConfirmPassword Doesn't Match",
    "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
  ]
}
```

```json
{
  "status": "fail",
  "code": 400,
  "message": "invalid link or expired"
}
```
