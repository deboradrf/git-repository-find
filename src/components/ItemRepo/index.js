import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <div className='repo-div'>
        <div className='repo-name'>
          <h3>{repo.name}</h3>
          <p>{repo.full_name}</p>
        </div>
        <div className='repo-btn'>
          <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
          <a rel="noreferrer" className="remover">Remover</a>
        </div>
      </div>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
