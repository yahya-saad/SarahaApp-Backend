# Authentication

| Path                                  | Method | Description                                        |
| ------------------------------------- | ------ | -------------------------------------------------- |
| `/api/auth/signup`                    | `POST` | Create a new user account.                         |
| `/api/auth/verify-email/:verifyToken` | `GET`  | Verify the user's email with a verification token. |
| `/api/auth/login`                     | `POST` | User login.                                        |
| `/api/auth/password-reset`            | `POST` | Send a password reset link to the user's email.    |
| `/api/auth/password-reset/:token`     | `POST` | Reset user password with a valid token.            |

### Documentation

- [Signip](./signup.md)
- [Verify Email](./verifyEmail.md)
- [Login](./login.md)
- [Password Reset Link](./sendPasswordReset.md)
- [Reset Password ](./resetPassword.md)
