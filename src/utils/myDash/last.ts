export function last (list:Array<any>){
    return Array.isArray(list) ? list.at(-1) : undefined
}