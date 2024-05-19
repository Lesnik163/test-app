import React, { memo } from "react";

import styled from "styled-components";

type PhotoProps = {
  src: string;
};
const StyledPhoto = styled.div`
  display: grid;
  border: 1px solid black;
  width: 200px;
`;

const Photo = (props: PhotoProps) => {
  const { src } = props;
  return (
    <StyledPhoto>
      <img src={src} alt="lash" width={200} height={250} />
    </StyledPhoto>
  );
};

export default memo(Photo);
