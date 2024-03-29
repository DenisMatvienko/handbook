/**
 * @param classNames
 *    - Project helper with using JSX className. Allow use classes more flexibility;
 *      classNames(classes.button, { hovered: true, blinked: false }, [withPadding, withMargin]),
 *      will be:
 *      class="button hovered withPadding withMargin"
 * @param Record
 *    - TS Utility type
 *      as key - str; as property: bool or str; { str: bool | str };
 * @param cls
 *    - name of class, using as str;
 *  @param mods
 *    - When value always true - should add this class to additional
 *    - allow to add bool flag if we want to add new css selector to current class;
 *      using as obj, example: classNames(classes.button, { hovered: true, blinked: false })
 *      will be: class="button hovered";
 *  @param additional
 *    - When value always true - should add to additional!!!
 *    - allow to add array of selectors to className
 *      using as array, example:
 *      classNames(classes.button, { hovered: true, blinked: false }, [withPadding, withMargin]),
 *      will be:
 *      class="button hovered withPadding withMargin"
 *
 *  @type Mods
 *    - use by records, see @param Record,
 *      undefined using because some fields, in types of components where using classNames - is
 *      not necessary properties, in that we will get undefined
 */

export type Mods = Record<string, boolean | string | undefined>

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
  ]
    .join(' ');
}
