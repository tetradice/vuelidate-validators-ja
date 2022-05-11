import { helpers, ipAddress } from "@vuelidate/validators";

/**
 * 値がIPアドレスとして正しい形式かどうかを判定します。
 */
export const ipAddressJa = helpers.withMessage(
  "IPアドレス形式で入力してください。",
  ipAddress
);
