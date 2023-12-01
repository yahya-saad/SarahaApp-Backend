# Delete profile Picture

reset to default profile picture

**URL** : `/api/user/profile-pic`

**METHOD** : `DELETE`

**Auth required** : YES

#### Headers:

```json
{
  "Auth": "<BEARER>__<TOKEN>"
}
```

#### Success Response:

**code** : **`201`**

```Json
{
    "status": "success",
    "message": "Profile picture deleted successfully",
    "data": {
        "user": {
            "profilePic": {
                "secure_url": "...",
                "public_id": null
            },
            "_id": "656792084cd8dd1ef2501489",
            "userName": "yhya101",
            "email": "yhya@email.com",
            "updatedAt": "2023-11-29T22:28:22.329Z"
        }
    }
}
```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 401,
  "message": "No custom profile picture to delete"
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
