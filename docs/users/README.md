# Users

| Path                    | Method   | Auth Required | Description              |
| ----------------------- | -------- | ------------- | ------------------------ |
| `/api/user/profile-pic` | `PATCH`  | YES           | Update profile picture   |
| `/api/user/profile-pic` | `DELETE` | YES           | Delete profile picture   |
| `/api/user/password`    | `PATCH`  | YES           | Update password          |
| `/api/user/`            | `DELETE` | YES           | Delete Current User      |
| `/api/user/`            | `GET`    | YES           | Show Current User        |
| `/api/user/qrcode`      | `GET`    | YES           | Generates Qrcode to user |

### Documentation

- [Update Profile Picture](./updateProfilePic.md)
- [Delete Profile Picture](./deleteProfilePic.md)
- [Change Pasword](./changePassword.md)
- [Delete User](./deleteUser.md)
- [Show User](./showUser.md)
- [User Qrcode](./userQrcode.md)
