import { helpers, requiredIf } from "@vuelidate/validators";

/**
 * 引数として渡した値がtrutyな値である場合に限り、値が空文字列かどうかを判定します。（trutyでない場合はスキップします）
 * @param {Boolean | String | function(): (Boolean | Promise<boolean>)} prop
 */
export const requiredIfJa = (
  prop: Parameters<typeof requiredIf>[0]
): ReturnType<typeof requiredIf> =>
  helpers.withMessage("必須項目です。", requiredIf(prop));
