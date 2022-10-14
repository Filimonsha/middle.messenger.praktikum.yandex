function isEmpty(value) {
    if (typeof value ==="number" || typeof value ==="boolean") {
        return true
    }
    return !(!!value)
}

