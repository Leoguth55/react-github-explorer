import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16}></FiChevronLeft> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://icons-for-free.com/iconfiles/png/512/+lolipop-1319972675439834633.png"
            alt="ddd"
          />
          <div>
            <strong>{params.repository}</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2181</strong>
            <span>Star</span>
          </li>
          <li>
            <strong>42</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>31</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to={'/'}>
          <div>
            <strong>asfasf</strong>
            <p>asdfagsd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
