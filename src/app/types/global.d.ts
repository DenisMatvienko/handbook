/**
 *  Global exporting modules and types, which use in all app
 *
 *  @param __IS_DEV__
 *    - is DefinePlugin variable
 *
 *   @param __IS_API__
 *    - is Instance API variable
 *
 *  @type DeepPartial<T>
 *    - allow to add all fields. Basically using in decorator.
 *      in strict mode some StateSchema fields crash with error (as example Login Schema):
 *      TS2739: Type '{ password: string; }' is missing the following properties from
 *      type 'LoginSchema': username, isLoading;
 *      Which means, that in this place needed to add all fields, as already added password field
 *      https://stackoverflow.com/questions/61132262/typescript-deep-partial
 */

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
