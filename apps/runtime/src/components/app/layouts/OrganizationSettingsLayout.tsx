import { DashboardLayout } from './DashboardLayout';
import classNames from 'clsx';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
	title: string;
	children: React.ReactNode;
};

const navigation = [
	{ name: 'Tým', href: '/app/settings'},
	// { name: 'Portály', href: '/app/settings/sites' },
];

function OrganizationSettingsLayout({ title, children }: Props) {
	const router = useRouter();
	return (
		<DashboardLayout title="Nastavení týmu" subtitle="Spravujte nastavení vašeho týmu">
			<div className="h-6 border-b border-gray-100 mb-6"></div>
			<div className="flex space-x-12">
				<div className="w-56">
					<nav className="flex flex-col items-start">
						{navigation.map((item) => (
							<Link
								href={item.href}
								className={classNames(
									'w-full text-left px-4 py-2 border-l-2 font-medium',
									item.href == router.pathname
										? 'border-gray-900 bg-gray-50'
										: 'border-transparent hover:bg-gray-50 text-gray-500',
								)}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex-1">{children}</div>
			</div>
		</DashboardLayout>
	);
}

export default OrganizationSettingsLayout;
