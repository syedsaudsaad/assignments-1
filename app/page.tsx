
 import Link from "next/link";

export default function Home(){
    return(
        <div>
            <h1>this is a home</h1>
            <Link href="/about.us">GO TO ABOUT US PAGE</Link>
            <br></br>
            <Link href="/contact.us">GO TO CONTACT US PAGE</Link>
            <br></br>
            <Link href="/service.us">GO TO SERVICE US PAGE</Link>
            <br></br>
            <Link href="/nested">GO TO NESTED US PAGE</Link>

        </div>
    )
}