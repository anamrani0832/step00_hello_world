'use client';
import { useRouter } from "next/navigation";
export default function Givename() {
  const route = useRouter();
  return (
    <div>
      My Name is Anam
      <br />
      <button type="button" onClick={() => route.push('/name/address')}>
              Get Address
            </button>
      
    </div>
  );
}
