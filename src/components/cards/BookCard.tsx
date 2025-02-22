type BookCardProps = {
  title: string;
  author: string;
  publisher: string;
  publicationDate: string;
  rating: number;
  isFavorite: boolean;
};

const BookCard = ({
  title,
  author,
  publisher,
  publicationDate,
  rating,
  isFavorite,
}: BookCardProps) => {
  return (
    <div className="bg-blue-50 p-6 shadow-lg rounded-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
      {isFavorite && (
        <div className="text-right mb-2">
          <span className="text-red-500 text-sm font-semibold">
            ❤️ Favorito
          </span>
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-blue-900">{title}</h2>
      </div>
      <div className="space-y-2 text-left">
        <p className="text-gray-700">
          <span className="font-medium">Autor:</span> {author}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Editora:</span> {publisher}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Publicado em:</span>{' '}
          {publicationDate
            ? new Date(publicationDate).toLocaleDateString()
            : 'Data inválida'}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">Nota:</span>{' '}
          <span className="text-yellow-500 font-semibold">{rating} ⭐</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
