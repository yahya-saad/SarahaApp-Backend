# Update profile Picture

**URL** : `/api/user/password`

**METHOD** : `PATCH`

**Auth required** : YES

#### Headers:

```json
{
  "Auth": "<BEARER>__<TOKEN>"
}
```

#### Body:

```json
{
  "oldPassword": "...",
  "newPassword": "...",
  "confirmPassword": "..."
}
```

#### Success Response:

**code** : **`200`**

```Json
{
    "status": "success",
    "message": "password changed successfully",
    "data": {
        "user": {
            "_id": "656792084cd8dd1ef2501489",
            "profilePic": {
                "secure_url": "...",
                "public_id": "..."
            },
            "userName": "yhya101",
            "email": "yhya@email.com",
            "password": "...",
            "gender": "male",
            "isConfirmed": true,
            "createdAt": "2023-11-29T19:33:28.981Z",
            "updatedAt": "2023-11-29T22:34:11.398Z",
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
    "\"oldPassword\" is required",
    "\"newPassword\" is required",
    "\"confirmPassword\" is required"
    "Password and ConfirmPassword Doesn't Match"

  ]
}
```

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": "old password is incorrect"
}
```

**code** : **`401`**

```json
{
  "status": "fail",
  "code": 401,
  "message": "Invalid Token"
}
```

```json
{
  "status": "fail",
  "code": 401,
  "message": " Token Is Required"
}
```

**code** : **`404`**

```json
{
  "status": "fail",
  "code": 404,
  "message": "User Not Found"
}
```
