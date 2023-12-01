# Send Message (Auth)

Sending message to specific user

**URL** : `/api/message/anonymous/:userName`

**METHOD** : `POST`

**Auth required** : NO

#### Body:

```json
{
  "Content": "How are you today ?"
}
```

#### Success Response:

**code** : **`201`**

```Json
{
    "status": "success",
    "message": "Message Sent Successfully",
    "data": {
        "message": {
            "_id": "6567a21b2ab23b4fd98583cd",
            "content": "How are you today ?",
            "senderUser": null,
            "receiverUser": "656791e84cd8dd1ef2501483",
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
  "code": 400,
  "message": "Content is missing"
}
```

**code** : **`404`**

```json
{
  "status": "fail",
  "code": 404,
  "message": "Invalid Receiver"
}
```
