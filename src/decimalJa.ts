import { helpers, decimal } from "@vuelidate/validators";

/**
 * 値が数値かどうかを判定します。
 */
export const decimalJa = helpers.withMessage(
  "半角数値を入力してください。",
  decimal
);
