# Login

**URL** : `/api/auth/login`

**METHOD** : `POST`

#### Body:

```json
{
  "email": "...",
  "password": "..."
}
```

#### Success Response:

**code** : **`200`**

```Json
{
    "status": "success",
    "message": "Login Successfully",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3OTFkZTRjZDhkZDFlZjI1MDE0ODAiLCJ1c2VyTmFtZSI6InVzZXIxIiwiZW1haWwiOiJ1c2VyMUBlbWFpbC5jb20iLCJpYXQiOjE3MDEyOTk3NTcsImV4cCI6MTcwMTM4NjE1N30.qJeV7NZ_64A8X7Jk00F7Ei3g2B0lynq2pZLNDXOVwVo"
    }
}
```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": ["\"email\" is required", "\"password\" is required"]
}
```

```json
{
  "status": "fail",
  "code": 400,
  "message": "Email or Password is incorrect"
}
```
