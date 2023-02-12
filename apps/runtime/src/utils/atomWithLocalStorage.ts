import { atom } from 'jotai';

export const atomWithLocalStorage = function <T>(key: string, initialValue: T) {
	const getInitialValue = () => {
		if (typeof localStorage === 'undefined') return initialValue;
		const item = localStorage.getItem(key);
		if (item !== null) {
			return JSON.parse(item);
		}
		return initialValue;
	};
	const baseAtom = atom(getInitialValue());
	const derivedAtom = atom(
		(get) => get(baseAtom),
		(get, set, update) => {
			if (typeof localStorage === 'undefined') return;
			const nextValue = typeof update === 'function' ? update(get(baseAtom)) : update;
			set(baseAtom, nextValue);
			localStorage.setItem(key, JSON.stringify(nextValue));
		},
	);
	return derivedAtom;
};
