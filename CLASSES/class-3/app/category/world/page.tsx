import Navbar from "@/app/components/navbar";
import Link from "next/link";
export default function World() {
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
    </>
  );
}
//http://localhost:3000/category/world; URL:Uniform Resource locator
//https:Protocol,     localhost:host,    /3000:Port,     category/world:route segment,    world:nested routing
