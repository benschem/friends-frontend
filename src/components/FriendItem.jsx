import { Show } from 'solid-js';

export default function FriendItem(props) {

  return (
    <li class="cursor-pointer grow-0 px-4 py-4 flex flex-col items-center rounded-xl shadow font-roboto bg-blue-chill-100 dark:bg-blue-chill-700">
      <div class="flex flex-row grow w-full">
        <h3 class="grow text-left text-lg font-bold text-blue-chill-700 dark:text-blue-chill-50">
          { props.person.name }
        </h3>
        <div class="pl-4 justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">
          <span class="px-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
            <Show
              when={props.person.contacts[0].context === 'group'}
              fallback={
                  "person"
              }
            >
                  groups
            </Show>
          </span>
          <span class="pl-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
            <Show
                when={props.person.contacts[0].contact_type === "in person"}
                fallback={
                    "smartphone"
                }
            >
                    handshake
            </Show>
          </span>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-between w-full">
        <p class="text-left text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
          { props.person.relationship }
        </p>
        <p class="text-right text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
          { props.person.contacts[0].formatted_date} ago
        </p>
      </div>
    </li>
  )
}
