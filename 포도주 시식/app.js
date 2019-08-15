const app = (n, arr) => {
    let result = 0
    const Dp = []

    for (let i = 0; i < 3 && i < n; i++) {
        if (i == 0) Dp[i] = arr[i]
        else Dp[i] = arr[i] + arr[i - 1]
    }
    for (let i = 3; i < n; i++) {
        result = Math.max(arr[i] + Dp[i - 2], Dp[i - 1])
        result = Math.max(result, arr[i] + arr[i - 1] + Dp[i - 3])
        Dp[i] = result
    }
    return result
}
app(6, [6, 10, 13, 9, 8, 1])
