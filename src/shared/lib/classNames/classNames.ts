// Record - ts type which mean that for obj we will use 
// as key-str, as property: bool or str <key, propery | property>
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    // Mods = {}, string[] = [] - means optional argument
    // should return string of classes. Func. for convenient to combine classes
    // cls - get main class (exml: App)
    // mods - obj key: name of class, prop: bool flag (if true: add class, else remove class)
    // additional - is array of another classes (exmpl: classes with padding, with margin etc..)
    // exmpl: classNames(cls: 'remove-btn', mods: {hovered: true, selectable: true, red: false}, additionsl: [withPadding, withMargin])
    // returned string: 'remove-btn hovered selectable withPadding withMargin'

    return [
        cls,
        // filtered by bool cause in aditional could be undefined values
        ...additional.filter(Boolean),
        //  (Mods)obj.entries return keys and property of obj return TUPLE ([[key, property], [key, property], etc..])
        // after that we are filter each tuple, which 'property' - is true - return into array, false property - filtering and remove
        // filtered map we itterate by .map, here we need key, which we are return
        // {  className - key: property - property  }
        Object.entries(mods)
            .filter(([className, property]) => Boolean(property))
            .map(([className]) => className)
    ].join(' ')

}