import { helpers, alphaNum } from "@vuelidate/validators";

/**
 * 値が半角英数字かどうかを判定します。
 */
export const alphaNumJa = helpers.withMessage(
  "半角英数字で入力してください。",
  alphaNum
);
