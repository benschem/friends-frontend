import ContactTypeIcon from "./ContactTypeIcon"
import ContextIcon from "./ContextIcon"
import formatDaysAgo from "../helpers/formatDaysAgo"

export default function FriendCard(props) {

  return (
    <li class="hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer grow-0 px-4 md:px-8 xl:px-16 py-4 flex flex-row items-center rounded-xl shadow-sm font-lato border-light-accent bg-light-secondary-bg dark:bg-dark-secondary-bg">
      <div class="flex-col grow">
        <h3 class="grow text-left text-lg font-bold text-light-heading dark:text-dark-heading">
          { props.person.name }
        </h3>
        <p class="text-left text-base font-light text-light-text dark:text-dark-text">
          { props.person.relationship }
        </p>
      </div>

      <div class="flex-col">
        <div class="justify-center divide-x divide-blue-chill-200 dark:divide-blue-chill-800">
          <ContextIcon context={props.person.contacts[0].context} />
          <ContactTypeIcon contactType={props.person.contacts[0].contact_type} />
        </div>
        <p class="text-center text-base font-light text-light-text dark:text-dark-text">
          { formatDaysAgo(props.person.contacts[0].days_ago)}
        </p>
      </div>
    </li>
  )
}
