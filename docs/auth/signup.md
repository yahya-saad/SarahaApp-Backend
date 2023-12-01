# Signup

**URL** : `/api/auth/signup`

**METHOD** : `POST`

#### Body:

```json
{
  "userName": "yhya101",
  "email": "yhya@email.com",
  "password": "123789@Yy",
  "confirmPassword": "123789@Yy",
  "gender": "male"
}
```

#### Success Response:

**code** : **`201`**

```Json

{
    "status": "success",
    "message": "User Registered Successfully",
    "data": {
        "user": {
            "_id": "6567c26cd67329559928193e",
            "userName": "yhya101",
            "email": "yhya@email.com",
            "password": "...",
            "profilePic": {
                "secure_url": "...",
                "public_id": null
            },
            "gender": "male",
            "isConfirmed": false,
            "createdAt": "2023-11-29T22:59:56.432Z",
            "updatedAt": "2023-11-29T22:59:56.432Z",
            "__v": 0
        }
    }
}

```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": [
    "\"userName\" is required",
    "\"password\" is required",
    "\"email\" is required",
    "\"email\" must be a valid email"
    "\"confirmPassword\" is required",
    "\"gender\" is required",
    "\"gender\" must be one of [male, female]"
    "Password and ConfirmPassword Doesn't Match",
    "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
  ]
}
```

```json
{
  "status": "fail",
  "code": 400,
  "message": "Email Already Registered"
}
```

```json
{
  "status": "fail",
  "code": 400,
  "message": "Username Already Registered"
}
```
