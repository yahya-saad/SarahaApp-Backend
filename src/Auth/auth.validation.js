import Joi from "joi";

export const signupSchema = Joi.object({
  userName: Joi.string().alphanum().min(5).max(15),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    }),

  email: Joi.string().email(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password and ConfirmPassword Doesn't Match",
  }),
  gender: Joi.string().valid("male", "female"),
})
  .options({ presence: "required" })
  .required();

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).required();

export const sendPasswordResetSchema = Joi.object({
  email: Joi.string().email().required(),
}).required();

export const resetPasswordSchema = Joi.object({
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 6 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    })
    .required(),

  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .messages({
      "any.only": "Password and ConfirmPassword Doesn't Match",
    })
    .required(),
}).unknown(true);
