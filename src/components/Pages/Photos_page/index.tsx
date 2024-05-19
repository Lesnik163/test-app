import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";
import Photo from "./Photo";
import { getPhotos } from "../../../services/photo";

export type Photos = {
  id: number;
  src: string;
};
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  justify-items: center;
`;

const PhotosPage = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataInfo = await getPhotos();
      setPhotos(dataInfo);
    };
    fetchData();
  }, []);
  return (
    <StyledWrapper>
      {photos?.map((photo: Photos) => {
        return <Photo src={photo?.src} key={photo?.id} />;
      })}
    </StyledWrapper>
  );
};
export default memo(PhotosPage);
