# Delete User

**URL** : `/api/user/`

**METHOD** : `DELETE`

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
    "message": "User deleted successfully",
    "data": null
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
