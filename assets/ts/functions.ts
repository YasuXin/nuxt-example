export const defineFadeinPosition = (containerNumber: number,
                                        width: number,
                                        height: number
): number => {
    let point = 0
    if(width <= 500 && height >= 800) {
        point = containerNumber * 860 - 500
    } else if(width <= 500 && height >= width * 1.2) {
        point = containerNumber * 800 - 400
    } else {
        point = containerNumber * 600 - 300
    }
    return point
}

export const convertImgSrc = (src: string): string => {
    return new URL(src, import.meta.url).href
}

import type { LinkArray } from '~/assets/ts/interfaces.ts'
export const defineLinkPosition = (array: LinkArray[], width: number, height: number) => {
    let containerHeight = 0
    if(width <= 500 && height >= 800) {
        containerHeight = 860
    } else if(width <= 500 && height >= width * 1.2) {
        containerHeight = 800
    } else {
        containerHeight = 600
    }

    let linkArray = array
    for(let i = 0; i < linkArray.length; i++) {
        linkArray[i].link = containerHeight * (i + 1)
    }

    return linkArray
}
