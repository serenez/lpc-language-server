
/**
 * Type of objects whose values are all of the same type.
 * The `in` and `for-in` operators can *not* be safely used,
 * since `Object.prototype` may be modified by outside code.
 */
export interface MapLike<T> {
    [index: string]: T;
}

export interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
    " __sortedArrayBrand": any;
}

export interface SortedArray<T> extends Array<T> {
    " __sortedArrayBrand": any;
}

/** @internal */
export type EqualityComparer<T> = (a: T, b: T) => boolean;

/** @internal */
export type Comparer<T> = (a: T, b: T) => Comparison;

/** @internal */
export const enum Comparison {
    LessThan = -1,
    EqualTo = 0,
    GreaterThan = 1,
}



/**
 * Common read methods for ES6 Map/Set.
 *
 * @internal
 */
export interface ReadonlyCollection<K> {
    readonly size: number;
    has(key: K): boolean;
    keys(): IterableIterator<K>;
}