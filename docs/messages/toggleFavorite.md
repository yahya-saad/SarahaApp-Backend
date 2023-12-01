# Toggle Favorite Status

if message favorite status = `true` becomes `false` and vice versa

**URL** : `api/message/:messageId/favorite`

**METHOD** : `PATCH`

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
    "message": "Message marked as favorite successfully",
    "data": {
        "message": {
            "_id": "6567a21b2ab23b4fd98583cd",
            "content": "Madness is the acme of intelligence.",
            "senderUser": "656792084cd8dd1ef2501489",
            "receiverUser": "656791e84cd8dd1ef2501483",
            "isFavourite": true,
            "createdAt": "2023-11-29T20:42:03.435Z",
            "updatedAt": "2023-11-29T22:10:58.968Z",
            "__v": 0
        }
    }
}
```

```json
{
  "status": "success",
  "message": "Message unmarked as favorite successfully",
  "data": {
    "message": {
      "_id": "6567a21b2ab23b4fd98583cd",
      "content": "Madness is the acme of intelligence.",
      "senderUser": "656792084cd8dd1ef2501489",
      "receiverUser": "656791e84cd8dd1ef2501483",
      "isFavourite": true,
      "createdAt": "2023-11-29T20:42:03.435Z",
      "updatedAt": "2023-11-29T22:11:16.844Z",
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
  "code": 401,
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
  "message": "Unauthorized to toggle this message"
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
