import { Show } from 'solid-js';

export default function ListItem(props) {

  return (
    <li>
      <div class="grow flex flex-row justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">

        <span class="pr-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
          <Show
            when={props.context === 'group'}
            fallback={
                "person"
            }
          >
                groups
          </Show>
        </span>

        <div class="grow pl-4">
          <h3 class="text-lg font-bold text-blue-chill-700 dark:text-blue-chill-50">{ props.date }</h3>
          <p class="text-base font-light text-blue-chill-700 dark:text-blue-chill-50">{ props.formatted_date} ago</p>
        </div>

        <span class="pl-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
            <Show
                when={props.contact_type === "in person"}
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
