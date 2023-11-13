export default function Icon(props) {
  return (
    <span class={`px-4 material-symbols-outlined text-right ${props.ideal ? "text-light-accent dark:text-dark-accent" : "text-light-highlight dark:text-dark-highlight"}`}>
      { props.icon }
    </span>
  )
}
