interface SingleColumnLayoutProps {
	renderHeader: React.ReactNode
	renderMain: React.ReactNode
	renderFooter: React.ReactNode
}

/**
 * A traditional layout with a header, main content and footer in a single column.
 */
export const SingleColumnLayout = (props: SingleColumnLayoutProps) => {
	return (
		<>
			<header>{props.renderHeader}</header>
			<main>
				<div className="container mx-auto my-0">{props.renderMain}</div>
			</main>
			<footer>{props.renderFooter}</footer>
		</>
	)
}
