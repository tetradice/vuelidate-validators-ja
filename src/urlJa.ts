import { helpers, url } from "@vuelidate/validators";

/**
 * 値がURLとして正しい形式かどうかを判定します。
 */
export const urlJa = helpers.withMessage("URL形式で入力してください。", url);
