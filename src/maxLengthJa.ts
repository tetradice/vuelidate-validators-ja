import { helpers, maxLength } from "@vuelidate/validators";

export const maxLengthJa = (
  max: Parameters<typeof maxLength>[0]
): ReturnType<typeof maxLength> =>
  helpers.withMessage(
    (msgProps) => `${msgProps.$params.max}文字以内で入力してください。`,
    maxLength(max)
  );
