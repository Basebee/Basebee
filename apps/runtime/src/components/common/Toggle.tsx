import React from 'react';

type Props = {
	children?: React.ReactNode;
	value: boolean;
	label: string;
	onChange: (value: boolean) => void;
};

export function Toggle({ children, value, onChange, label }: Props) {
	return (
		<div className="flex items-center">
			<div className="form-switch">
				<input
					type="checkbox"
					id="switch-1"
					className="sr-only"
					checked={value}
					onChange={() => onChange(!value)}
				/>
				<label className="bg-slate-400" htmlFor="switch-1">
					<span
						className="bg-white shadow-sm"
						aria-hidden="true"
					></span>
					<span className="sr-only">{label}</span>
				</label>
			</div>
			{children && (
				<div className="text-sm text-slate-400 italic ml-2">
					{children}
				</div>
			)}
		</div>
	);
}
