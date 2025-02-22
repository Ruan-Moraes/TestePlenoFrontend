import { useEffect, useState } from 'react';

import Main from '../templates/Main';
import BookCard from '../components/cards/BookCard';

const Home = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('http://localhost:3000/livros');

        if (!response.ok) {
          throw new Error('Erro ao buscar os livros');
        }

        const data = await response.json();

        setLivros(data);
      } catch (error) {
        alert('Erro ao buscar os livros');

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Erro ao buscar os livros</p>;
  }

  return (
    <Main>
      <section className="container mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Livros Disponíveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {livros.map(
            ({
              id,
              nome,
              autor,
              editora,
              data_publicacao,
              star,
              fl_favorito,
            }) => (
              <BookCard
                key={id}
                title={nome}
                author={autor}
                publisher={editora}
                publicationDate={data_publicacao}
                rating={star}
                isFavorite={fl_favorito}
              />
            )
          )}
        </div>
      </section>
    </Main>
  );
};

export default Home;
