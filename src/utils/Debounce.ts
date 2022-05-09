export default function (func: (...args: unknown[]) => void, waitTime: number) {
	let callTimeout: ReturnType<typeof setTimeout> | null = null
	return function(this: unknown, ...args: unknown[]) {
		if(callTimeout) clearTimeout(callTimeout)
		callTimeout = setTimeout(() => {
			func.apply(this, args)
		}, waitTime)
	}
}
