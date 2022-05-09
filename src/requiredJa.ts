import { helpers, required } from "@vuelidate/validators";

/**
 * 値が空文字列かどうかを判定します。
 */
export const requiredJa = helpers.withMessage("必須項目です。", required);
