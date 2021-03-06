import emailRegexp from './emailRegexp';
/**
 * 检查`value`是否为邮箱。
 *
 * @since 0.0.6
 * @param value
 * @returns {boolean}
 * @example
 * ```
 * isEmail('156148999@qq.com')
 * // => true
 * ```
 */
export default function isEmail(value: any): boolean {
  return emailRegexp.test(value);
}
