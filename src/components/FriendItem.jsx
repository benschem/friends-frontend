import { Show } from 'solid-js';

export function Icon(props) {
  return (
    <span class={`px-4 material-symbols-outlined text-right ${props.ideal ? "text-light-accent dark:text-dark-accent" : "text-light-highlight dark:text-dark-highlight"}`}>
      { props.name }
    </span>
  )
}

export default function FriendItem(props) {

  return (
    <li class="hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer grow-0 px-4 md:px-8 xl:px-16 py-4 flex flex-col items-center rounded-xl shadow-sm font-lato border-light-accent bg-light-secondary-bg dark:bg-dark-secondary-bg">
      <div class="flex flex-row grow w-full">
        <h3 class="grow text-left text-lg font-bold text-light-heading dark:text-dark-heading">
          { props.person.name }
        </h3>
        <div class="pl-4 justify-center items-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">
          <Show
              when={props.person.contacts[0].context === 'group'}
              fallback={
                <Icon name={"person"} ideal={true} />
              }
          >
              <Icon name={"groups"} ideal={false} />
          </Show>

          <Show
              when={props.person.contacts[0].contact_type === "in person"}
              fallback={
                <Icon name={"smartphone"} ideal={false}/>
              }
          >
            <Icon name={"handshake"} ideal={true} />
          </Show>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-between w-full">
        <p class="text-left text-base font-light text-light-text dark:text-dark-text">
          { props.person.relationship }
        </p>
        <p class="text-right text-base font-light text-light-text dark:text-dark-text">
          { props.person.contacts[0].formatted_date} ago
        </p>
      </div>
    </li>
  )
}
