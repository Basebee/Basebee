import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	ChevronUpDownIcon,
	Cog6ToothIcon,
	RectangleStackIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import classNames from 'clsx';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Logo } from '~/components/common/Logo';

const navigation = [
	{ name: 'Stránky', href: '/app/pages', icon: RectangleStackIcon },
];

const userNavigation = [
	// { name: 'Můj profil', href: '#' },
	{ name: 'Odhlásit se', href: '#' },
];

type Props = {
	children: React.ReactNode;
	title?: string;
	subtitle?: string;
};
export function DashboardLayout({ children, title }: Props) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

	return (
		<>
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 -mr-12 pt-2">
											<button
												type="button"
												className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon
													className="h-6 w-6 text-white"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									<div className="flex flex-shrink-0 items-center px-4">
										<Link href="/">
											<Logo className="h-6 text-gray-700" />
										</Link>
									</div>
									<div className="mt-5 h-0 flex-1 overflow-y-auto">
										<nav className="space-y-1 px-2">
											{navigation.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													className={classNames(
														router.pathname.startsWith(item.href)
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
														'group flex items-center px-2 py-2 text-base font-medium rounded-md',
													)}
												>
													<item.icon
														className={classNames(
															router.pathname.startsWith(item.href)
																? 'text-gray-500'
																: 'text-gray-400 group-hover:text-gray-500',
															'mr-4 flex-shrink-0 h-6 w-6',
														)}
														aria-hidden="true"
													/>
													{item.name}
												</Link>
											))}
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
							<div className="w-14 flex-shrink-0" aria-hidden="true">
								{/* Dummy element to force sidebar to shrink to fit close icon */}
							</div>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-100 bg-gray-50 pt-5">
						<div className="flex flex-shrink-0 items-center px-4">
							<Link href="/">
								<Logo className="h-6 text-gray-700" />
							</Link>
						</div>
						<div className="mt-5 flex flex-grow flex-col">
							<nav className="flex-1 space-y-1 px-4 pb-4">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={classNames(
											router.pathname.startsWith(item.href)
												? 'text-gray-900 bg-gray-100'
												: 'text-gray-600 hover:text-gray-900',
											'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
										)}
									>
										<item.icon
											className={classNames(
												router.pathname.startsWith(item.href)
													? 'text-gray-700'
													: 'text-gray-500 group-hover:text-gray-500',
												'mr-3 flex-shrink-0 h-5 w-5',
											)}
											aria-hidden="true"
										/>
										{item.name}
									</Link>
								))}
							</nav>
							<div className="px-4 pb-4 pt-3 border-t border-gray-100">
								<ProfileMenu />
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col md:pl-64">
					<main className="flex-1">
						<div className="py-6">
							<PageHeader title={title} className="max-w-7xl" />
							<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{children}</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

type PageHeaderProps = {
	title?: string;
	className?: string;
};
function PageHeader({ title, className }: PageHeaderProps) {
	return (
		<div className={classNames('mx-auto px-4 sm:px-6 md:px-8', className)}>
			{title && <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>}
		</div>
	);
}

function ProfileMenu() {
	return (
		<Menu as="div" className="relative w-full">
			<div className="w-full">
				<Menu.Button
					className={classNames(
						'text-gray-600 hover:text-gray-90 hover:bg-gray-100 w-full flex justify-between items-center',
						'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
					)}
				>
					<span className="text-gray-800 font-medium text-sm text-ellipsis">
						Dominik Vít
					</span>
					<span className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500 text-white font-bold">
						D
					</span>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mb-2 bottom-full w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					{userNavigation.map((item) => (
						<Menu.Item key={item.name}>
							{({ active }) => (
								<Link
									href={item.href}
									className={classNames(
										active ? 'bg-gray-100' : '',
										'block px-4 py-2 text-sm text-gray-700',
									)}
								>
									{item.name}
								</Link>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}