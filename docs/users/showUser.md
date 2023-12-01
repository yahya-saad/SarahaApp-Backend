# Show User

Show current logged in user details

**URL** : `/api/user/`

**METHOD** : `GET`

**Auth required** : YES

#### Headers:

```json
{
  "Auth": "<BEARER>__<TOKEN>"
}
```

#### Success Response:

**code** : **`200`**

```Json
{
    "status": "success",
    "data": {
        "user": {
            "_id": "656792084cd8dd1ef2501489",
            "profilePic": {
                "secure_url": "...",
                "public_id": "..."
            },
            "userName": "yhya101",
            "email": "yhya@email.com",
            "gender": "male",
            "isConfirmed": true,
            "createdAt": "2023-11-29T19:33:28.981Z",
            "updatedAt": "2023-11-29T22:35:51.430Z",
            "__v": 0
        }
    }
}
```

#### Fail Response:

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
  "message": "User not found"
}
```
