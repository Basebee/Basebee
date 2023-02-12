import { AppleLogo } from './AppleLogo';
import { GoogleLogo } from './GoogleLogo';
import { Spinner } from './Spinner';
import classNames from 'clsx';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Props = {
	title?: string;
	loading?: boolean;
	look?: 'primary' | 'secondary' | 'tertiary' | 'google' | 'apple';
	size?: 'sm' | 'md';
	dark?: boolean;
	icon?: any;
	as?: any;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	AnchorHTMLAttributes<HTMLAnchorElement>;

// export const Button = React.forwardRef<RNButton, Props>((props, ref) => {
// 	return <RNButton {...props} ref={ref} />;
// });

export const Button = ({ as: As = 'button', ...props }: Props) => {
	const getButtonClasses = () => {
		const baseClasses = [props.className];
		const sizeClasses = [!props.size && 'px-4 py-3', props.size === 'sm' && 'px-4 py-2'];
		let classes = classNames(
			...baseClasses,
			...sizeClasses,
			'rounded-lg flex flex-row justify-center relative',
			'bg-gray-900 hover:bg-gray-800',
		);

		switch (props.look) {
			case 'secondary':
				classes = classNames(
					...baseClasses,
					...sizeClasses,
					'rounded-md flex flex-row justify-center items-center relative border-y border-y-transparent',
					'hover:bg-gray-800/50 bg-gray-800',
				);
				break;

			case 'google':
				classes = classNames(
					...baseClasses,
					...sizeClasses,
					'rounded-md flex flex-row justify-center items-center relative border-y border-y-transparent',
					'bg-white hover:bg-gray-200',
				);
				break;

			case 'apple':
				classes = classNames(
					...baseClasses,
					...sizeClasses,
					'rounded-md flex flex-row justify-center items-center relative border-y border-y-transparent',
					'bg-white hover:bg-gray-200',
				);
				break;
		}
		return classes;
	};

	const getTextClasses = () => {
		const baseClasses = 'text-elipsis font-medium';
		let classes = classNames('text-white text-sm', baseClasses);
		switch (props.look) {
			case 'secondary':
				classes = classNames('text-white text-sm', baseClasses);
				break;

			case 'apple':
				classes = classNames('text-black text-sm', baseClasses);
				break;

			case 'google':
				classes = classNames('text-black text-sm', baseClasses);
				break;
		}
		return classes;
	};
	return (
		<div className="relative rounded-md">
			<As
				{...props}
				onClick={(e: any) => {
					props.onClick?.(e);
				}}
				disabled={props.disabled}
				style={{
					opacity: props.disabled ? 0.5 : 1,
				}}
				className={getButtonClasses()}
			>
				{props.look === 'google' && (
					<div className="mr-3">
						<GoogleLogo />
					</div>
				)}
				{props.look === 'apple' && (
					<div className="mr-3">
						<AppleLogo className="text-black" />
					</div>
				)}
				{props.icon && (
					<div className="mr-3">
						<props.icon className={classNames('h-5 w-5', getTextClasses())} />
					</div>
				)}
				<span className={getTextClasses()}>{props.title}</span>
			</As>
			{props.loading && (
				<div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center rounded-md bg-gray-600">
					<Spinner />
				</div>
			)}
		</div>
	);
};

Button.displayName = 'Button';
