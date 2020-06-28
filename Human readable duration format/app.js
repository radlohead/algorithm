// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

const formatDuration = (N) => {
    const TIME = {
        DAY: 'day',
        HOUR: 'hour',
        MINUTE: 'minute',
        SECONDS: 'seconds',
    }
    const formatFn = () => {
        const tempList = {
            etc: 0,
            seconds: N % 60,
        }
        let depthList = {
            day: 0,
            hour: 0,
            minute: 0,
            seconds: 0,
        }
        const depthTime = (n) => {
            if (n < 60) return (depthList.minute = n)
            else {
                if (depthList.hour < 23) {
                    depthList.hour += 1
                    return depthTime(Math.floor(n - 60))
                } else {
                    depthList.day += 1
                    return depthTime(Math.floor(n - 24))
                }
            }
        }
        if (N >= 60) tempList.etc = Math.floor(N / 60)
        depthList.seconds = tempList.seconds
        for (let v in tempList) {
            if (TIME.SECONDS !== v) {
                depthTime(tempList[v])
            }
        }

        let result = ''
        for (let v in depthList) {
            if (depthList[v]) {
                if (TIME.DAY === v || TIME.HOUR === v) {
                    result += `${depthList[v]} ${v}, `
                } else if (TIME.MINUTE === v) {
                    result += `${depthList[v]} ${v} and `
                } else {
                    result += `${depthList[v]} ${v}`
                }
            }
        }
        return result
    }
    return formatFn()
}
formatDuration(62) // 1 minute and 2 seconds
formatDuration(3662) // 1 hour, 1 minute and 2 seconds
formatDuration(3862) // 1 hour, 4 minute and 22 seconds
formatDuration(366002) // 195 day, 23 hour, 40 minute and 2 seconds
