# Messages

| Path                               | Method   | Auth Required | Description                |
| ---------------------------------- | -------- | ------------- | -------------------------- |
| `/api/message/anonymous/:userName` | `POST`   | NO            | Send a message anonymously |
| `/api/message/:userName`           | `POST`   | YES           | Send a message             |
| `/api/message/sent`                | `GET`    | TES           | All sent messages          |
| `/api/message/received`            | `GET`    | YES           | All received messages      |
| `/api/message/favorite`            | `GET`    | YES           | All favorite messages      |
| `/api/message/:messageId`          | `GET`    | YES           | Show messgae               |
| `/api/message/:messageId`          | `DELETE` | YES           | Delete messgae             |
| `api/message/:messageId/favorite`  | `PATCH`  | YES           | Togle favorite state       |

### Documentation

- [Send Message (Unauth)](<./sendMessage(Unauth).md>)
- [Send Message (Auth)](<./sendMessage(Auth).md>)
- [All Sent Messages](./allSent.md)
- [All Received Messages](./allReceived.md)
- [All Favorite Messages ](./allfavorite.md)
- [Show Messgae ](./showMessage.md)
- [Delete Messgae ](./deleteMessage.md)
- [Togle Favorite ](./toggleFavorite.md)
