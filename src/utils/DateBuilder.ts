export default function (date: string): string {
	const dateObject = new Date(date)
	return `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()} ${dateObject.getHours()}:${dateObject.getUTCMinutes()}`
}
