// import { getPhotos } from 'apiService/photos';
import { Text, Form, Button, Loader, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';
import { getPhotos } from '../apiService/photos';

export const Photos = () => {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (userInput) => {
    setResponse(null);
    setPhotos([]);
    setPage(1);
    setRequest(userInput);
  };

  const handleLoadmore = () => setPage(page + 1);

  useEffect(() => {
    if (!request || !page) return;
    try {
      setIsLoading(true);
      // const fetchPhotos = async () => {
      //   const response = await getPhotos(request, page);
      //   setResponse(response);
      //   response.total_results &&
      //     setPhotos((prev) => [...prev, ...response.photos]);
      // };
      const fetchPhotos = async () => {
        const response = await getPhotos(request, page);
        setResponse(response);
        response.total && setPhotos((prev) => [...prev, ...response.results]);
      };
      fetchPhotos();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [request, page]);
  return (
    <>
      {console.log(response)}
      {console.log(photos)}
      <Form onSubmit={handleSubmit} />
      {photos.length ? (
        <PhotosGallery photos={photos} />
      ) : response.total && !photos.length ? (
        <Text textAlign="center">
          Oops! Nothing found... Try something different!
        </Text>
      ) : (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {isLoading && <Loader />}
      {response && response.total - photos.length > response.per_page && (
        <Button onClick={handleLoadmore}>Loadmore</Button>
      )}
    </>
  );
};
