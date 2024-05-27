// src/pages/NomeIdade.js
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import styles from './NomeIdade.module.css';
import ButtonImage from '../components/ButtonImage';
import man from '../img/man.png';
import woman from '../img/womam.png';
import other from '../img/other.png';
import H1 from '../components/H1';

function NomeIdade() {
  return (
    <div className={styles.container}>
      <FormInput
        id="Nome"
        text="Digite seu Nome"
        type="text"
        placeholder="Nome Completo"
      />

      <FormInput
        id="Nascimento"
        text="Data de Nascimento"
        type="date"
        placeholder="Data de Nascimento"
      />

      <div className={styles.genderContainer}>
        <div className={styles.genderItem}>
          <ButtonImage image={man} />
          <H1 text="Masculino"/>
        </div>
        <div className={styles.genderItem}>
          <ButtonImage image={woman} />
          <H1 text="Feminino"/>
        </div>
        <div className={styles.genderItem}>
          <ButtonImage image={other} />
          <H1 text="Indefinido"/>
        </div>
      </div>

      <div className={styles.buttonPosition}>
        <Button type="button" value="Voltar" url='/Estado' />
        <Button type="button" value="Concluído" url='/CadastrarOutro' />
      </div>
    </div>
  );
}

export default NomeIdade;
