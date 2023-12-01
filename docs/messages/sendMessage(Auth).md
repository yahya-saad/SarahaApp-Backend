# Send Message (Auth)

Sending message to specific user

**URL** : `/api/message/:userName`

**METHOD** : `POST`

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
          "senderUser": "656792084cd8dd1ef2501489",
          "receiverUser": "656791e84cd8dd1ef2501483",
          "isFavourite": false,
          "createdAt": "2023-11-30T20:42:03.435Z",
          "updatedAt": "2023-11-30T20:42:03.435Z",
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

```json
{
  "status": "fail",
  "code": 400,
  "message": "Cannot send a message to yourself"
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
  "message": "Account not verified"
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

```json
{
  "status": "fail",
  "code": 404,
  "message": "Invalid Sender"
}
```
