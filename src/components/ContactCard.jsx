import ContactTypeIcon from "./ContactTypeIcon"
import ContextIcon from "./ContextIcon"
import formatDaysAgo from "../helpers/formatDaysAgo"

export default function ContactCard(props) {

  return (
    <li class="rounded-xl shadow-lg p-4 flex items-center font-lato bg-light-secondary-bg dark:bg-dark-secondary-bg">
      <div class="grow flex flex-row justify-center items-center">

        <div class="grow pl-4">
          <h3 class="text-md font-bold text-blue-chill-700 dark:text-blue-chill-50">
            { formatDaysAgo(props.contact.days_ago)}
          </h3>
          <p class="text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
            { new Date(props.contact.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) }
          </p>
        </div>
        <div class="divide-x divide-blue-chill-200 dark:divide-blue-chill-800r">
          <ContextIcon context={props.contact.context}/>
          <ContactTypeIcon contactType={props.contact.contact_type}/>
        </div>

      </div>
    </li>
  )
}
