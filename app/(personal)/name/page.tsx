'use client';
import { useRouter } from "next/navigation";
import  Link from "next/link";
export default function Givename() {
  const route = useRouter();
  return (
    <div>
      My Name is Anam
      <br />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <button type="button" onClick={() => route.push('/name/address')}>
              Get Address
            </button>
      
    </div>
  );
}
