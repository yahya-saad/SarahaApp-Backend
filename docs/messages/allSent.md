# All Sent Messages

**URL** : `/api/message/sent`

**METHOD** : `GET`

**Auth required** : YES

#### Headers:

```json
{
  "Auth": "<BEARER>__<TOKEN>"
}
```

#### Query params:

```json
{
  "limit": <NUMBER>,
  "page": <NUMBER>,
  "sort":// <1> or <-1>  1 => ASC  -1 => DESC
}
```

#### Success Response:

**code** : **`200`**

```Json
{
    "status": "success",
    "data": {
        "messages": [
            {
                "_id": "6567a21b2ab23b4fd98583cd",
                "content": "How are you today ?",
                "senderUser": "656792084cd8dd1ef2501489",
                "receiverUser": {
                    "profilePic": {
                        "secure_url": "...",
                        "public_id": "..."
                    },
                    "_id": "656791e84cd8dd1ef2501483",
                    "userName": "user2",
                    "email": "user2@email.com"
                },
                "isFavourite": true,
                "createdAt": "2023-11-30T20:42:03.435Z",
                "updatedAt": "2023-11-30T20:42:03.435Z",
                "__v": 0
            }
        ]
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
