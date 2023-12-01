# Show Messgae

Get specific messages

**URL** : `/api/message/:messageId`

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
        "message": {
            "_id": "6567a21b2ab23b4fd98583cd",
            "content": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
            "senderUser": {
                "profilePic": {
                    "secure_url": "...",
                    "public_id": "..."
                },
                "_id": "656792084cd8dd1ef2501489",
                "userName": "user3",
                "email": "user3@email.com"
            },
            "receiverUser": {
                "profilePic": {
                    "secure_url": "...",
                    "public_id": "..."
                },
                "_id": "656791e84cd8dd1ef2501483",
                "userName": "user2",
                "email": "user2@email.com"
            },
            "isFavourite": false,
            "createdAt": "2023-11-29T20:42:03.435Z",
            "updatedAt": "2023-11-29T20:42:03.435Z",
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
  "message": "Unauthorized to access this message"
}
```

**code** : **`404`**

```json
{
  "status": "fail",
  "code": 403,
  "message": "Message not found"
}
```
