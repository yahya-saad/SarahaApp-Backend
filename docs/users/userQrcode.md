# User Qrcode

Generate Qrcode to send message to current user

**URL** : `/api/user/qrcode`

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
    "message": "Qrcode generated succesfully",
    "data": {
        "qrcode": "data:image/png;base64,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"
    }
}
```

#### Error Response:

**code** : **`500`**

```json
{
  "status": "error",
  "code": 500,
  "message": "Internal Server Error"
}
```
