import Icon from "./Icon"
import { Show } from "solid-js"

export default function ContextIcon(props) {
  return (
    <Show
      when={props.context === 'group'}
      fallback={
        <Icon icon={"person"} ideal={true} />
      }
  >
      <Icon icon={"groups"} ideal={false} />
    </Show>
  )
}
