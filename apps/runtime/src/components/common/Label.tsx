import {Tooltip} from './Tooltip';
import React from 'react';

type Props = {
	required?: boolean;
	tooltip?: string;
} & React.HTMLProps<HTMLLabelElement>;

export function Label({ required, tooltip, children, ...props }: Props) {
	return (
		<div className="flex items-center justify-between">
			<label {...props}>
				<>
					{children}{' '}
					{required && <span className="text-rose-500">*</span>}
				</>
			</label>
			{tooltip && (
				<Tooltip className="ml-2" bg="dark" size="md">
					<div className="text-sm text-slate-200">{tooltip}</div>
				</Tooltip>
			)}
		</div>
	);
}
