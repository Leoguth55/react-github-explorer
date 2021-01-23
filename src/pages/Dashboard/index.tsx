import React, { useState, useEffect, FormEvent } from 'react';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IError {
  status: boolean;
  message?: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  // const [inputError, setInputError] = useState('');
  const [inputError, setInputError] = useState<IError>({ status: false });
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@Githubexplorer:repositories'
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@Githubexplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      // setInputError('Digite autor/repositório');

      setInputError({ status: true, message: 'Digite autor/repositório' });
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      // setInputError('');
      setInputError({ status: false });
    } catch (err) {
      // setInputError('Erro na busca por esse repositório');
      setInputError({
        status: true,
        message: 'Erro na busca por esse repositório',
      });
    }
    console.log(inputError);
    console.log(!!inputError);
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Repositórios no GitHub</Title>
      <Form hasError={inputError.status} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome de um repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError.status && <Error>{inputError.message}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            href="teste"
            to={`repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
