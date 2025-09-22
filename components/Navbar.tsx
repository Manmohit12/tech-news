import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='flex justify-between pb-4 border-b mb-4 items-center'>
            <div>
                <Link href={"/"}>
                <h1 className='text-4xl font-bold tracking-tighter'>TechNews</h1>
                </Link>
                <p className='text-sm'>Exploring Tommorow's Innovation, <br/> One Byte at a Time.</p>
            </div>
            <div>
                <Link className='btn' href={"/sign-in"}>Sign In</Link>
            </div>
        </div>

    )
}