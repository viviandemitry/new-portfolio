import React from 'react';
import EmailIcon from '../../assets/icons/email.svg';
import * as Styles from './styles';

function Email() {
  const email = 'vivian090@gmail.com';

  const handleClick = () => {
    const subject = encodeURIComponent('Interesse no seu portfólio');
    const body = encodeURIComponent('Olá,\n\nEstou interessado no seu trabalho e gostaria de discutir oportunidades. Por favor, entre em contato comigo.');

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <Styles.EmailButton type="button" onClick={handleClick}>
        <img src={EmailIcon} alt="Email" />
    </Styles.EmailButton>
  );
}

export default Email;
