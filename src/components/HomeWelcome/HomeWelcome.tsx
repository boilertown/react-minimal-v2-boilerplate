export const HomeWelcome = () => {
	return (
		<>
			<figure>
				<img
					className="text-center mx-auto py-4 block max-w-xs"
					src="/launch.png"
					alt="A rocket is being launched"
				/>
				<figcaption className="text-gray-400 text-sm text-center">
					Illustration by{' '}
					<a
						className="text-gray-400 underline"
						href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
					>
						Icons 8
					</a>
				</figcaption>
			</figure>
			<h1 className="text-3xl text-center	font-bold my-4">
				Welcome to Boilertowns
			</h1>
		</>
	);
};
