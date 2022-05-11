import { helpers, maxLength } from "@vuelidate/validators";

/**
 * 値（文字列）の長さが、指定した最大文字数以内であることを判定します。
 */
export const maxLengthJa = (max: Params[0]): ReturnType<typeof maxLength> =>
  helpers.withMessage(
    (msgProps) => `${msgProps.$params.max}文字以内で入力してください。`,
    maxLength(max)
  );

type Params = Parameters<typeof maxLength>;
