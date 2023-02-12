import Link from 'next/link';
import React from 'react';
import { Button } from '~/components/common/Button';
import { Logo } from '~/components/common/Logo';
import { TextInput } from '~/components/common/TextInput';

type Props = {};

function Signup({}: Props) {
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	return (
		<div className="flex min-h-full w-full">
			<div className="flex flex-1 flex-col justify-center items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<Link href="/">
							<Logo className="text-gray-600 h-6" />
						</Link>
						<h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900">
							Zaregistrujte se
						</h2>
					</div>
					<div className="mt-8">
						<div className="mt-6">
							<form action="#" method="POST" className="space-y-6">
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email
									</label>
									<div className="mt-1">
										<TextInput
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700"
									>
										Heslo
									</label>
									<div className="mt-1">
										<TextInput
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											onChange={(e) => {
												setPassword(e.currentTarget.value);
											}}
											value={password}
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="confirm-password"
										className="block text-sm font-medium text-gray-700"
									>
										Heslo znovu
									</label>
									<div className="mt-1">
										<TextInput
											id="confirm-password"
											name="confirm-password"
											type="password"
											autoComplete="current-password"
											required
											onChange={(e) => {
												setConfirmPassword(e.currentTarget.value);
											}}
											value={confirmPassword}
										/>
									</div>
								</div>
								<div>
									<Button
										disabled={
											password.length < 3 || password != confirmPassword
										}
										className="w-full"
										type="submit"
										title="Přihlásit se"
									/>
								</div>
								<p className="mt-4 text-sm text-gray-400">
									Máte již účet?{' '}
									<Link
										href="/auth/login"
										className="font-medium text-gray-900 hover:text-gray-900 hover:underline"
									>
										Přihlaste se
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
