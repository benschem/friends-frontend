import { Show } from 'solid-js';

export default function FriendListItem(props) {

  return (
    <li class="cursor-pointer grow-0 px-4 py-4 flex items-center rounded-xl shadow font-roboto bg-blue-chill-100 dark:bg-blue-chill-700">
      <div class="grow flex flex-row justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">

        <span class="pr-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
          <Show
            when={props.person.contacts[0].context === 'group'}
            fallback={
                "person"
            }
          >
                groups
          </Show>
        </span>

        <div class="grow pl-4">
          <h3 class="text-lg font-bold text-blue-chill-700 dark:text-blue-chill-50">{ props.person.name }</h3>
          <p class="text-base font-light text-blue-chill-700 dark:text-blue-chill-50">{ props.person.contacts[0].formatted_date} ago</p>
        </div>

        <span class="pl-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
            <Show
                when={props.person.contacts[0].contact_type === "in person"}
                fallback={
                    "devices"
                }
            >
                    handshake
            </Show>
          </span>

      </div>
    </li>
  )
}
