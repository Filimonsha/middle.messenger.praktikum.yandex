function isEmpty(value) {
    if (typeof value ==="number") return true
    else if(typeof value ==="boolean") return true

    return !(!!value)
}

