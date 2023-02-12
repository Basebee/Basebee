import classNames from 'clsx';
import React from 'react';
import { Logo } from '~/components/common/Logo';

type Props = {
	pagesOpen: {
		id: string;
		name: string;
		active: boolean;
	}[];
};

export function PageEditorHeader({ pagesOpen }: Props) {
	return (
		<div className="w-full bg-gray-900 flex items-center px-4">
			<Logo className="h-4 text-white" />
			<nav className="ml-8">
				{pagesOpen.map((page) => {
					return (
						<button
							className={classNames(
								page.active
									? 'bg-gray-800 text-white'
									: 'hover:bg-gray-800 text-gray-300',
								'px-4 py-3 border-l border-r border-gray-700 font-semibold text-xs ',
							)}
						>
							{page.name}
						</button>
					);
				})}
			</nav>
		</div>
	);
}
