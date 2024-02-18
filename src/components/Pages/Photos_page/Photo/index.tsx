import React, { memo } from "react";

import { useParams } from "react-router-dom";

import styled from "styled-components";

import { photos } from "../../../../photos/photos";

const StyledPhoto = styled.div`
  display: grid;
  border: 1px solid black;
  width: 200px;
`;

const Photo = (props: any) => {
  const {src} = props;
  const { id } = useParams();
  const undefinedSrc = photos.find(photo => String(photo.id) === id)?.href
  const href = src ?? undefinedSrc;
  return (
      <StyledPhoto>
        <img src={href} alt="lash" width={200} height={250}/>
      </StyledPhoto>

  );
}

export default memo(Photo);
