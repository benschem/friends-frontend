export default function FriendListItem(props) {

  return (
    <li class="p-2 flex items-center rounded-xl shadow font-roboto bg-blue-chill-100">
      <div class="pl-4 flex flex-col">
        <p class="text-4xl text-center">{ props.person.contacts[0].contact_type === "in person" ? "🧍" : "📱" }</p>
        <p class="text-center text-blue-chill-700 text-sm font-light">{props.person.contacts[0].context }</p>
      </div>
      <div class="pl-8">
        <h3 class="text-lg font-bold text-blue-chill-700">{ props.person.name }</h3>
        <p class="text-base font-light text-blue-chill-700">{ props.person.contacts[0].formatted_date} ago</p>
      </div>
    </li>
  )
}
