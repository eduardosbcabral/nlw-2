import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/29133996?s=460&u=5b6448ac95459d30e91293f9893d9fafe54fb523&v=4" alt="Eduardo Cabral" />
        <div>
          <strong>Eduardo Cabral</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio molestie, commodo magna eu, efficitur lectus. 
        <br /><br />
        Mauris at augue lectus. Cras a ullamcorper risus. Ut mollis egestas sem, eget facilisis sem vulputate in. Cras posuere gravida nulla, non eleifend massa eleifend tincidunt.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;