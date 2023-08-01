/**
 *  Global exporting modules and types, which use in all app
 *
 *  @param __IS_DEV__
 *    - is DefinePlugin variable
 *
 *  @type DeepPartial<T>
 *    - allow to add all fields. Basically using in decorator
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
