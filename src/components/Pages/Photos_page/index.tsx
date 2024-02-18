import React, { memo } from "react";

import { photos } from "../../../photos/photos";
import styled from "styled-components";
import Photo from "./Photo";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  justify-items: center;
`;

const PhotosPage = () =>{
  return (
    <StyledWrapper>
      {photos.map((photo) => {
        return (
            <Link to={`${photo.id}`} key={photo.id}><Photo src={photo.href}/></Link>
        );
      })}
    </StyledWrapper>
  );
}
export default memo(PhotosPage);
