# Update profile Picture

**URL** : `/api/user/profile-pic`

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
  "profilePic": // <JPEG> or <PNG>
}
```

#### Success Response:

**code** : **`201`**

```Json
{
    "status": "success",
    "message": "Profile Picture Updated Successfully",
    "data": {
        "user": {
            "profilePic": {
                "secure_url": "...",
                "public_id": "..."
            },
            "_id": "656792084cd8dd1ef2501489",
            "userName": "yhya101",
            "email": "yhya@email.com",
            "updatedAt": "2023-11-29T22:22:43.807Z"
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
  "message": "profile picture is required"
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
