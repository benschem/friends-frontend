import { Show } from 'solid-js';

export default function ContactItem(props) {

  return (
    <li class="cursor-pointer rounded-xl shadow px-4 flex items-center font-roboto bg-blue-chill-100 dark:bg-blue-chill-700 divide-blue-chill-200 dark:divide-blue-chill-800">
      <div class="p-2 grow flex flex-row justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">

        <div class="grow">
          <h3 class="text-md font-bold text-blue-chill-700 dark:text-blue-chill-50">
            { props.contact.formatted_date} ago
          </h3>
          <p class="text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
            { new Date(props.contact.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) }
          </p>
        </div>

        <span class="px-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
          <Show
              when={props.contact.contact_type === "in person"}
              fallback={
                  "smartphone"
              }
          >
                  handshake
          </Show>
        </span>

        <span class="pl-4 material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
          <Show
            when={props.contact.context === 'group'}
            fallback={
                "person"
            }
          >
                groups
          </Show>
        </span>

      </div>
    </li>
  )
}
