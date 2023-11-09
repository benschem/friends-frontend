import { A } from "@solidjs/router";

export default function Home() {
  return(
    <>
      <h1>Home</h1>
      <A href="/friends" class="cursor-pointer">Your friends and family</A>
    </>
  )
}
