import React from 'react';
import { MailtoLink } from '@edx/paragon';

export default function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        For questions, please contact the edX Customer Success team
        at <MailtoLink to="customercustomer@edx.org">customersuccess@edx.org</MailtoLink>.
      </p>
    </>
  );
}
