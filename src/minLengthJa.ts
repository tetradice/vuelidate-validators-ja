import { helpers, minLength } from "@vuelidate/validators";

/**
 * 値（文字列）の長さが、指定した最小文字数以上であることを判定します。
 */
export const minLengthJa = (min: Params[0]): ReturnType<typeof minLength> =>
  helpers.withMessage(
    (msgProps) => `${msgProps.$params.min}文字以上で入力してください。`,
    minLength(min)
  );

type Params = Parameters<typeof minLength>;
