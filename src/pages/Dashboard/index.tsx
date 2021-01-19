import React from 'react';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome de um repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29134825?s=60&v=4"
            alt="Leonardo Guth"
          />
          <div>
            <strong>react-very-basic</strong>
            <p>Very basic content aboout react</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29134825?s=60&v=4"
            alt="Leonardo Guth"
          />
          <div>
            <strong>react-very-basic</strong>
            <p>Very basic content aboout react</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/29134825?s=60&v=4"
            alt="Leonardo Guth"
          />
          <div>
            <strong>react-very-basic</strong>
            <p>Very basic content aboout react</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
