export function formattedDateInSeconds(incomingDate: number) {
    if (incomingDate) {
        const date = new Date(incomingDate)
        const hours = date.getHours();
        const seconds = date.getSeconds();
        return `${hours} : ${seconds}`
    }
    return ""
}
