import { BasebeeContent } from './Content';
import React from 'react';

export function BasebeePreview() {
	const [content, setContent] = React.useState<any>(null);

	const onMessage = (event: MessageEvent) => {
		const { data } = event;
		if (data.type === 'content') {
			setContent(data.content);
		}
	};

	React.useEffect(() => {
		document.addEventListener('click', handler, true);

		function handler(e: any) {
			e.stopPropagation();
			e.preventDefault();
			console.log('Click');
		}

		window.addEventListener('message', onMessage);
		return () => {
			window.removeEventListener('message', onMessage);
		};
	}, []);

	if (!content) {
		return <p>Loading...</p>;
	}

	return <BasebeeContent content={content} />;
}
