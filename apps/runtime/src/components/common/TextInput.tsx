import classes from 'clsx';
import React from 'react';

type Props = {
	className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ className, ...rest }: Props) {
	return (
		<input
			className={classes(
				'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm',
				className,
			)}
			{...rest}
		/>
	);
}
