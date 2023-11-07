export default function FriendListItem(props) {

  return (
    <div class="rounded shadow bg-white p-4 grid grid-rows-2">
      <h3 class="grow text-lg font-bold">{props.person.name}</h3>
      <p class="text-base">{props.person.contacts[0].contact_type === "in person" ? "🙋" : "📱"} {props.person.contacts[0].formatted_date} ago <span class="text-gray-400 text-sm">{props.person.contacts[0].context}</span></p>
    </div>

  )
}
