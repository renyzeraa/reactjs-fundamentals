import { Counter } from "./counter"
import { RepositoryItem } from "./repository-item"

const itens = [
  {
    name: 'unform',
    description: 'Form whit React.js',
    link: 'https://github.com/'
  },
  {
    name: 'cozinha-explorer',
    description: 'Ecommerce Cozinha',
    link: 'https://github.com/'
  },
  {
    name: 'cabelos-e-cia',
    description: 'Landign Page Cabelos e Cia',
    link: 'https://github.com/'
  }
]

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Lista de repositórios </h1>
      <ul>
        {itens.map(({description, link, name}) => <RepositoryItem description={description} name={name} link={link}/>)}
      </ul>

      <Counter/>
    </section>
  )
}