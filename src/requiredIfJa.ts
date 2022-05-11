import { helpers, requiredIf } from "@vuelidate/validators";

/**
 * 引数として渡した値がtrutyな値である場合に限り、値が空文字列かどうかを判定します。（trutyな値でない場合はスキップします）
 *
 * @param prop 任意の文字列、boolean値、boolean値を返す関数、boolean値を返すPromiseのいずれか
 */
export const requiredIfJa = (prop: Params[0]): ReturnType<typeof requiredIf> =>
  helpers.withMessage("必須項目です。", requiredIf(prop));

type Params = Parameters<typeof requiredIf>;
