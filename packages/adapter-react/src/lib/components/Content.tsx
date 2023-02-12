export type BasebeeContentProps = {
	content: any;
};
export function BasebeeContent({ content }: BasebeeContentProps) {
	return <div>{JSON.stringify(content)}</div>;
}
