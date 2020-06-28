// 인접 문자열 AB와 CD가 연속적으로 있을 경우에 제거하고 남은 문자열을 리턴

const solution = (S) => S.replace(/ba|ab|cd|dc/gi, '')
solution('CBACD') // C
solution('CABABD') // CD
solution('ACBDACBD') // ACBDACBD
