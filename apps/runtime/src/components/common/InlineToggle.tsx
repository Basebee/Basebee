import classNames from 'clsx';
import React from 'react';

export type InlineToggleOption<T> = {
	value: T;
	name: string;
	look?: 'default' | 'success' | 'danger';
};

export type InlineToggleProps<T extends string | number> = {
	options: InlineToggleOption<T>[];
	value: T;
	onChange: (value: T) => void;
};

export function InlineToggle<T extends string | number>({
	options,
	value,
	onChange,
}: InlineToggleProps<T>) {
	const isSelected = (option: InlineToggleOption<typeof value>) =>
		option.value === value;

	return (
		<div className="flex flex-wrap -space-x-px">
			{options.map((option) => (
				<button
					key={option.value}
					className={classNames(
						'btn  border-slate-200 hover:bg-slate-50  rounded-none first:rounded-l last:rounded-r',
						isSelected(option) && 'bg-slate-100',
						isSelected(option) &&
							(!option.look || option.look === 'default') &&
							'text-indigo-500',
						isSelected(option) &&
							option.look &&
							option.look === 'success' &&
							'text-emerald-600',
						isSelected(option) &&
							option.look &&
							option.look === 'danger' &&
							'text-rose-500',
						!isSelected(option) && 'bg-white text-slate-600',
					)}
					onClick={(e) => {
						e.preventDefault();
						onChange(option.value);
					}}
				>
					{option.name}
				</button>
			))}
		</div>
	);
}
