import { helpers, sameAs } from "@vuelidate/validators";

/**
 * 値が指定した別の値と等しいかどうかを判定します。
 *
 * @param equalTo 比較先の値、もしくは値へのRef参照
 * @param otherName エラーメッセージ内で表示する、比較先の項目名
 */
export function sameAsJa<E = unknown>(
  equalTo: E,
  otherName?: string
): ReturnType<typeof sameAs> {
  return helpers.withMessage((msgProps) => {
    const otherName =
      msgProps.$params.otherName === "other"
        ? "他値"
        : msgProps.$params.otherName;
    return `${otherName}と同じ値を入力する必要があります。`;
  }, sameAs(equalTo, otherName));
}
