import { helpers, numeric } from "@vuelidate/validators";

/**
 * 値が数値かどうかを判定します。
 *
 * ※マイナスの数値を入力するとエラーとなることにご注意ください。 (vuelidate 2.0.0-alpha.23 時点）
 */
export const numericJa = helpers.withMessage(
  "数値を入力してください。",
  numeric
);
