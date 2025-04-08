// import Image from "next/image";

import Link from "next/link";
import ProductCard from "../components/AddToCart";

export default function Home() {
  return (<main>
    <h1>hello world</h1>
    <Link href={"/users"}>Users</Link>
    <ProductCard></ProductCard>
  </main>);
}
