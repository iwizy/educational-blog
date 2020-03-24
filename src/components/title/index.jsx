import React from 'react';
import Helmet from 'react-helmet';

const Title = ({title}) => {
  let defaultTitle = 'Блог';
  return(
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  )
};

export default Title;