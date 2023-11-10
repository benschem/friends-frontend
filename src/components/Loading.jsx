function LoadingFriendItem() {
  return (
    <li class="animate-pulse blur-sm grow-0 px-4 py-4 flex flex-col items-center rounded-xl shadow font-roboto bg-blue-chill-100 dark:bg-blue-chill-700">
      <div class="flex flex-row grow w-full">
        <h3 class="grow text-left text-lg font-bold text-blue-chill-700 dark:text-blue-chill-50">
          Person McPerson
        </h3>
        <div class="pl-4 justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">
          <span class="px-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
            person
          </span>
          <span class="pl-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
            handshake
          </span>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-between w-full">
        <p class="text-left text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
          friend
        </p>
        <p class="text-right text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
          2 days ago
        </p>
      </div>
    </li>
  )
}

export function LoadingContactItem() {
  return (
    <li class="animate-pulse blur-sm  rounded-xl shadow px-4 flex items-center font-roboto bg-blue-chill-100 dark:bg-blue-chill-700 divide-blue-chill-200 dark:divide-blue-chill-800">
      <div class="p-2 grow flex flex-row justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">

        <div class="grow">
          <h3 class="text-md font-bold text-blue-chill-700 dark:text-blue-chill-50">
            2 days ago ago
          </h3>
          <p class="text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
            Fri, 10 Oct 2023
          </p>
        </div>

        <span class="px-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
          handshake
        </span>

        <span class="pl-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
          person
        </span>

      </div>
    </li>
  )
}
export function LoadingFriendShow() {
  return (
    <h1 class="animate-pulse blur-sm p-8 text-center text-3xl font-pacifico text-blue-chill-700 dark:text-blue-chill-50">
      Person McPersonface
      <span class="pl-2 font-roboto text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
        friend
      </span>
    </h1>
  )
}

export function LoadingFriends() {
  return (
    <>
      <LoadingFriendItem />
      <LoadingFriendItem />
      <LoadingFriendItem />
      <LoadingFriendItem />
    </>
  )
}

export function LoadingContacts() {
  return (
    <>
      <LoadingContactItem />
      <LoadingContactItem />
      <LoadingContactItem />
      <LoadingContactItem />
      <LoadingContactItem />
      <LoadingContactItem />
      <LoadingContactItem />
      <LoadingContactItem />
    </>
  )
}
