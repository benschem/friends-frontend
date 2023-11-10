import { A } from "@solidjs/router";

export default function Home() {
  return(
    <div class="mx-4 grow">
      <h1 class="mb-8 text-3xl text-center font-pacifico text-blue-chill-700 dark:text-blue-chill-50">
          Stay Connected with your friends and family
      </h1>
      <p>Do you ever find yourself caught up in the hustle of life, realizing it's been too long since you reached out to a friend or family member? StayConnected is here to make sure those essential connections don't slip through the cracks.</p>
      <div class="my-4 grid grid-cols-2 gap-4">
        <A href="/friends" class="p-4 text-center rounded-lg border-2 shadow-lg cursor-pointer font-lato text-sm font-bold bg-blue-chill-300 dark:bg-blue-chill-700 text-blue-chill-700 dark:text-blue-chill-50">
          Login
        </A>
        <A href="/friends" class="p-4 text-center rounded-lg border-2 shadow-lg cursor-pointer font-lato text-sm font-bold bg-blue-chill-300 dark:bg-blue-chill-700 text-blue-chill-700 dark:text-blue-chill-50">
          Signup
        </A>
      </div>
    </div>
  )
}
