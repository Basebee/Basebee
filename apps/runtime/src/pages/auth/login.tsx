import { authOptions } from '@basebee/auth';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { getCsrfToken, getProviders } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Button } from '~/components/common/Button';
import { Logo } from '~/components/common/Logo';
import { TextInput } from '~/components/common/TextInput';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);
	if (session) {
		return { redirect: { destination: '/' } };
	}

	const csrfToken = await getCsrfToken(context);
	return {
		props: { csrfToken },
	};
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
function Login({ csrfToken }: Props) {
	return (
		<div className="flex min-h-full">
			<div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<Link href="/">
							<Logo className="text-gray-600 h-6" />
						</Link>
						<h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900">
							Vítejte zpět!
						</h2>
					</div>
					<div className="mt-8">
						<div className="mt-6">
							<form
								method="post"
								action="/api/auth/signin/email"
								className="space-y-6"
							>
								<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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
										/>
									</div>
								</div>

								{/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div> */}

								<div>
									<Button className="w-full" type="submit" title="Přihlásit se" />
								</div>
								<p className="mt-4 text-sm text-gray-400">
									Nemáte ještě účet?{' '}
									<Link
										href="/auth/signup"
										className="font-medium text-gray-900 hover:text-gray-900 hover:underline"
									>
										Zaregistrujte se
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="relative hidden w-0 flex-1 lg:block bg-black">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="/images/login-bg.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Login;
