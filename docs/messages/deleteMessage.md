# Delete Message

**URL** : `/api/message/:messageId`

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
    "message": "Message deleted successfully",
    "data": null
}
```

#### Fail Response:

**code** : **`400`**

```json
{
  "status": "fail",
  "code": 400,
  "message": "Invalid message id"
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

**code** : **`403`**

```json
{
  "status": "fail",
  "code": 403,
  "message": "Unauthorized to delete this message"
}
```

**code** : **`404`**

```json
{
  "status": "fail",
  "code": 404,
  "message": "Message not found"
}
```
