interface RepositoryItemProps {
  name: string
  description: string
  link: string
}

export function RepositoryItem({ name, description, link }: RepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={link}>Acessar Repositório</a>
    </li>
  )
}