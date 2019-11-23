/**
 * Intager → [undefined]
 * creates array of given n size
 */
export const range = n => Array.from({length: n})

/**
 * [arrof Intager] Intager → Boolean
 * determine is given index i last index in array
 */
export const isLast = (arr, i) => arr.length === i + 1
