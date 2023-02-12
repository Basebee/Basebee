import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PageEditorHeader } from '~/components/app/page-editor/PageEditorHeader';

type Props = {};

function Editor({}: Props) {
	const {
		data: bbfile,
		error,
		isLoading: bbfileLoading,
	} = useQuery({
		queryKey: ['bbfile'],
		queryFn: async () => {
			const res = await fetch('/api/basebee/file');
			return res.json();
		},
	});
	const [pagesOpen, setPagesOpen] = React.useState([
		{
			id: '1',
			name: 'Page 1',
			active: true,
		},
		{
			id: '2',
			name: 'Page 2',
			active: false,
		},
	]);
	const selectedOpenPage = pagesOpen.find((page) => page.active);
	return (
		<div className="h-full w-full flex flex-col">
			<PageEditorHeader pagesOpen={pagesOpen} />
			<div className="flex flex-1 divide-x divide-gray-100">
				<div className="w-72">
					<nav>
						<button className=""></button>
					</nav>
				</div>
				<div className="flex-1">
					<iframe
						src={`http://localhost:4000/basebee`}
						sandbox="allow-scripts"
						className="w-full h-full"
					></iframe>
				</div>
				<div className="p-4 w-72">R</div>
			</div>
		</div>
	);
}

export default Editor;
