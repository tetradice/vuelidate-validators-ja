import { helpers, maxLength, required } from "@vuelidate/validators";

export const requiredJa = helpers.withMessage("必須項目です。", required);

export const maxLengthJa = (max: Parameters<typeof maxLength>[0]): ReturnType<typeof maxLength> =>
  helpers.withMessage(
    (msgProps) => `${(msgProps.$params as any).max}桁以内で入力してください。`,
    maxLength(max)
  );
