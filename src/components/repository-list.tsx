import { RepositoryItem } from "./repository-item"
import '../style/repositories.scss'
import { useState, useEffect } from "react"
import { Root, Root2 } from "../@types/repository";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Root2[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1> Lista de repositórios </h1>
      <ul>
        {repositories.map(({ description, html_url, name, node_id }) => <RepositoryItem key={node_id} description={description ?? 'Sem descrição'} name={name} link={html_url} />)}
      </ul>
    </section>
  )
}