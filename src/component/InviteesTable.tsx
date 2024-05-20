/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React from 'react';

import type { InviteeModel } from '@/types/inviteeModel';

type UsersTableProps = {
  invitees: InviteeModel[];
};

const UsersTable: React.FC<UsersTableProps> = ({ invitees }) => {
  const groupedInvitees = invitees.reduce(
    (acc: { [key: string]: InviteeModel[] }, invitee) => {
      const { group } = invitee;
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group]!.push(invitee);
      return acc;
    },
    {} as { [key: string]: InviteeModel[] },
  );

  return (
    <div className="font-LibreBaskerville mx-auto mb-8 items-center justify-center text-3xl">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.keys(groupedInvitees).map((group) => (
          <div key={group} className="mb-8 ">
            <h2 className="mb-4 text-xl font-bold text-white">{group}</h2>
            <div className="relative overflow-x-auto rounded-md">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {groupedInvitees[group]!.map((invitee) => (
                    <tr
                      key={invitee._id}
                      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {invitee.firstName}
                      </th>
                      <td className="px-6 py-4 dark:text-white">
                        {invitee.lastName}
                      </td>
                      <td className="px-6 py-4 dark:text-white">
                        {invitee.status === true
                          ? 'Confirmed'
                          : invitee.status === false
                            ? 'Declined'
                            : 'Pending'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
