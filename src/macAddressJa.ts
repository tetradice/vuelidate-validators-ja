import { helpers, macAddress } from "@vuelidate/validators";

/**
 * 値がMACアドレスとして正しい形式かどうかを判定します。
 */
export const macAddressJa = helpers.withMessage(
  "MACアドレス形式で入力してください。",
  macAddress
);
