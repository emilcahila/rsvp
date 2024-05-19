import React from 'react';

import AddInviteeFormComponent from '@/component/AddInvitee';
import { BACKGROUND_COLOR } from '@/utils/constants';

const AddInviteePage = () => {
  return (
    <div
      className="font-LibreBaskerville flex min-h-screen flex-col items-center justify-center"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <h1
        className="font-LibreBaskerville mb-8 text-3xl text-white"
        style={{ fontFamily: 'Libre Baskerville' }}
      >
        Add Invitee
      </h1>
      <div className="item-center mx-auto mb-8 flex items-center justify-center rounded-lg bg-white p-8 shadow-md md:w-96">
        <AddInviteeFormComponent />
      </div>
    </div>
  );
};

export default AddInviteePage;
