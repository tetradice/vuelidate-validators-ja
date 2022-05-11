import { helpers, minValue } from "@vuelidate/validators";

/**
 * 値が指定した値以上の数値であることを判定します。
 */
export const minValueJa = (min: Params[0]): ReturnType<typeof minValue> =>
  helpers.withMessage(
    (msgProps) => `${msgProps.$params.min}以上で入力してください。`,
    minValue(min)
  );

type Params = Parameters<typeof minValue>;
