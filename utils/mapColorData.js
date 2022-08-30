import { colors } from '../constants/data';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (color) {
	return colors.find(colorItem => colorItem.id === +color)?.name;
}
