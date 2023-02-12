import { InlineToggle, InlineToggleOption } from '../InlineToggle';
import { FieldHookConfig, useField } from 'formik';
import React from 'react';

export type FormikInlineToggleProps<T extends string | number> = {
	options: InlineToggleOption<T>[];
	onChange?: (value: T) => void;
};

type Props<T extends string | number> = FormikInlineToggleProps<T> &
	FieldHookConfig<string>;

function FormikDropdownSelect<T extends string | number>(props: Props<T>) {
	const [field, meta] = useField(props);
	const handleOnChange = (value: typeof props.value) => {
		const event = {
			target: {
				type: 'change',
				id: props.id,
				name: props.name,
				value: value,
			},
		};
		field?.onChange(event);
	};
	return (
		<div className="w-full">
			<InlineToggle
				{...field}
				onChange={(value) => handleOnChange(value)}
				options={props.options}
				value={field.value as typeof props.value}
			/>
			{meta.touched && meta.error ? (
				<div className="text-xs mt-1 text-rose-500">{meta.error}</div>
			) : null}
		</div>
	);
}

export default FormikDropdownSelect;
