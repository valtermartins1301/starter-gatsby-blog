import React from 'react';
import Img from 'gatsby-image'

// @Creditas
import { Typography } from '@creditas/typography';
import { styled } from '@creditas/stylitas';

import {
  title,
  containerHorizontal,
  containerIconHorizontal,
} from './cardText.styles';

// Styled Components
const ContainerHorizontal = styled.div`${containerHorizontal}`;
const Title = styled(Typography)`${title}`;
const ContainerIconHorizontal = styled(Img)`${containerIconHorizontal}`;

const CardText = ({
  onClick,
  width,
  height,
  containerStyle,
  title,
  body,
  action,
  icon,
}) => (
  <ContainerHorizontal onClick={onClick} containerStyle={containerStyle} width={width} height={height}>
    <div>
      <Title variant="h2">{title}</Title>
      {body}
      {action && (<div>{action}</div>)}
    </div>
    {icon && (<ContainerIconHorizontal alt={icon.description} fluid={icon.fluid}/>)}
  </ContainerHorizontal>
);

export { CardText };
