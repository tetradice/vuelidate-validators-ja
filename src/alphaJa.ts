import { helpers, alpha } from "@vuelidate/validators";

/**
 * 値が半角英字かどうかを判定します。
 */
export const alphaJa = helpers.withMessage(
  "半角英字で入力してください。",
  alpha
);
