export default async function Home() {
	const message = await fetch('localhost:3001').then(res => res.text());
	return (
		<main className='min-h-screen flex items-center justify-center bg-white text-black'>
			<h1>{message}</h1>
		</main>
	);
}
