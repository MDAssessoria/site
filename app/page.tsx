import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/Navbar';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<NavBar />
			<main className={"flex flex-col md:flex-row min-h-screen items-center justify-stretch p-24 " + lora.className}>
				<div className="flex flex-1 flex-col gap-5">
					<h1 className='text-4xl font-semibold '>Gods Unleashed A Greek My Experience</h1>
					<p className='text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum odit
						assumenda quasi nisi in, sunt, at quia ex quisquam, enim officia corporis magnam quae
						aliquid esse sint? Libero, hic.
					</p>
					<Link href="#" className='px-6 py-3 rounded font-semibold w-fit text-zinc-900' style={{ backgroundColor: '#E6CD8E' }}>Saiba mais</Link>
					<div className="flex flex-col p-6 rounded bg-zinc-800 mt-6 max-w-md">
						<h3 className='text-lg font-bold'>Unique Artifacts</h3>
						<p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta consectetur vero eaque voluptatibus ea quis, obcaecati sunt laboriosam dolore fugit omnis natus delectus reprehenderit nesciunt impedit excepturi? Eum, aspernatur.</p>
					</div>
				</div>
				<div className='relative flex-1'>
					{/* <div className="absolute bottom-0 right-0 bg-yellow-500 opacity-30 blur-3xl rounded-full h-[600px] w-[600px]" style={{zIndex: -5}}></div> */}
					<Image src="/midas.png" className='z-10' width={2911} height={3369} alt="Estatua" />
				</div>
			</main>
		</>
	);
}
