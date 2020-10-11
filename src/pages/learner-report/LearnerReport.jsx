import React, { useContext } from 'react';
import { Button, Container } from '@edx/paragon';

import { ToastsContext } from '../../components/toasts';

export default function LearnerReport() {
  const { addToast } = useContext(ToastsContext);

  return (
    <Container className="py-3" fluid>
      <h1>Learner Report</h1>
      <Button
        onClick={() => addToast('Hello!')}
      >
        Click me!
      </Button>
    </Container>
  );
}
