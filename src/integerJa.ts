import { helpers, integer } from "@vuelidate/validators";

/**
 * 値が整数かどうかを判定します。
 */
export const integerJa = helpers.withMessage(
  "半角整数値を入力してください。",
  integer
);
