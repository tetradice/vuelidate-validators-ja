import { helpers, requiredUnless } from "@vuelidate/validators";

/**
 * 引数として渡した値がtrutyな値ではない場合に限り、値が空文字列かどうかを判定します。（trutyな値の場合はスキップします）
 *
 * @param prop 任意の文字列、boolean値、boolean値を返す関数、boolean値を返すPromiseのいずれか
 */
export const requiredUnlessJa = (
  prop: Params[0]
): ReturnType<typeof requiredUnless> =>
  helpers.withMessage("必須項目です。", requiredUnless(prop));

type Params = Parameters<typeof requiredUnless>;
