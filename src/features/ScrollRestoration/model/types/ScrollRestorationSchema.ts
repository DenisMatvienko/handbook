/**
 *      ScrollRestorationSchema
 *
 *      @param ScrollSchema;
 *          string: page address;
 *          number: scroll position;
 *
 */

export type ScrollSchema = Record<string, number>;

export interface ScrollRestorationSchema {
    scroll: ScrollSchema;
}
