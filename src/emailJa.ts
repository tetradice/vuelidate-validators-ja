import { helpers, email } from "@vuelidate/validators";

/**
 * 値がメールアドレスとして正しい形式かどうかを判定します。
 */
export const emailJa = helpers.withMessage(
  "メールアドレス形式で入力してください。",
  email
);
