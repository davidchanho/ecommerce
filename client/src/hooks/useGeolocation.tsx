import { useEffect, useState } from "react";

function useGeolocation() {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationPositionError>();
  const [options] = useState<PositionOptions>({
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCoordinates,
      getErrors,
      options
    );
  }, [options]);

  const getCoordinates = (position: GeolocationPosition) => {
    const { coords } = position;
    setCoords(coords);
  };

  const getErrors = (error: GeolocationPositionError) => {
    setError(error);
  };

  return { coords, error };
}

export default useGeolocation;
