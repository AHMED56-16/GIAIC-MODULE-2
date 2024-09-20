import Link from 'next/link';
export default function(){
    return (
        <ul className="flex justify-center gap-5">
        <Link href="/category/world"><li className="text-blue-500 text-2xl p-2">World</li></Link>
        <Link href="/category/pakistan"><li className="text-purple-500 text-2xl p-2">Pakistan</li></Link>
        <Link href="/category/sports"><li className="text-pink-500 text-2xl p-2">Sports</li></Link>
    </ul>
    )
}