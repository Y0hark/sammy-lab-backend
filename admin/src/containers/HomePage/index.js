import React, { memo } from 'react';

import { Block, Container } from './components';

const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>Hello Sammy! 👋 <br/>
			Il est grand temps d'écrire et de rédiger de beaux articles! <br/>
			Une bonne journée, soirée, nuit à toi et surtout n'arrête jamais d'apprendre! 😀</Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);