// eslint-disable-next-line import/no-anonymous-default-export
export default function (number) {
	return new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	}).format(number);
}
