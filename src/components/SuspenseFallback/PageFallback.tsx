import { SingleColumnLayout } from 'components/Layouts'

export const PageFallback = () => {
	return (
		<SingleColumnLayout
			renderHeader={null}
			renderMain={<h1>Loading...</h1>}
			renderFooter={null}
		/>
	)
}
