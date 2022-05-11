import { helpers, between } from "@vuelidate/validators";

/** 値が指定した範囲内にあるかどうかを判定します。 */
export const betweenJa = (
  min: Params[0],
  max: Params[1]
): ReturnType<typeof between> =>
  helpers.withMessage(
    (msgProps) =>
      `${msgProps.$params.min}～${msgProps.$params.max}の間で入力してください。`,
    between(min, max)
  );

type Params = Parameters<typeof between>;
