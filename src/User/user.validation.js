import Joi from "joi";

export const changePasswordSchema = Joi.object({
  oldPassword: Joi.string(),
  newPassword: Joi.string()
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
  confirmPassword: Joi.string().valid(Joi.ref("newPassword")).messages({
    "any.only": "Password and ConfirmPassword Doesn't Match",
  }),
})
  .options({ presence: "required" })
  .required();
