import { helpers, maxValue } from "@vuelidate/validators";

/**
 * 値が指定した値以下の数値であることを判定します。
 */
export const maxValueJa = (max: Params[0]): ReturnType<typeof maxValue> =>
  helpers.withMessage(
    (msgProps) => `${msgProps.$params.max}以下で入力してください。`,
    maxValue(max)
  );

type Params = Parameters<typeof maxValue>;
