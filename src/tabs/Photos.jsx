import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const hendleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      try {
        const response = await getPhotos(query, page);
        setPhotos(pre => [...pre, ...response.photos]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const hendleClick = () => {
    setPage(pre => pre + 1);
  };
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form addTodos={hendleSearch} />
      <PhotosGallery photos={photos} />
      <Button onClick={hendleClick}>Load more</Button>
    </>
  );
};
