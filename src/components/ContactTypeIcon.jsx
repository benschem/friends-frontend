import Icon from "./Icon"
import { Show } from "solid-js"

export default function ContactTypeIcon(props) {
  return (
    <Show
        when={props.contactType === "in person"}
        fallback={
          <Icon icon={"smartphone"} ideal={false}/>
        }
    >
      <Icon icon={"handshake"} ideal={true} />
    </Show>
  )
}
