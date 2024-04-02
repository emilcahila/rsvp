/* eslint-disable no-alert */
import React, { useState } from 'react';

import { Modal } from '@/modal/modal';

const FormWithTextInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [noticeModalIsOpen, setNoticeModalIsOpen] = useState(false);

  const successModal = {
    title: 'Success',
    content: 'Your RSVP has been received',
  };

  const noticeModal = {
    title: 'Notice',
    content: 'Your RSVP already exists',
  };

  const closeSuccessModal = () => {
    setSuccessModalIsOpen(false);
  };

  const closeNoticeModal = () => {
    setNoticeModalIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let sheetData = [];
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);

    const url =
      'https://script.google.com/macros/s/AKfycbz3CjymXt7wisn-H1b03a8wfNdpHgYlWSuDVCzACSJcWPErEQM5N23fQN7S91Ihy_q_/exec';

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.ok) {
        sheetData = await response.json();
      } else {
        alert(`Failed to fetch data: ${response.statusText}`);
      }
    } catch (error) {
      alert(`Error fetching data: ${error}`);
    }

    if (!sheetData.length) {
      fetch(url, {
        method: 'POST',
        body: formData,
      });
      setSuccessModalIsOpen(true);
      return;
    }

    const existingGuest = sheetData?.find(
      (item: { firstName: string; lastName: string }) =>
        item.firstName === firstName && item.lastName === lastName,
    );

    if (existingGuest) {
      setNoticeModalIsOpen(true);
    } else {
      fetch(url, {
        method: 'POST',
        body: formData,
      });
      setSuccessModalIsOpen(true);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center rounded-md bg-primary-100 text-center sm:flex-row sm:items-start sm:justify-center sm:p-12 sm:text-left"
      style={{ paddingTop: '0px', paddingBottom: '2rem' }}
    >
      <form
        onSubmit={handleSubmit}
        className="whitespace-no-wrap mt-3 py-1 sm:mt-0 sm:flex sm:flex-col sm:items-center sm:justify-center"
      >
        <div className="mb-2">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="rounded border p-2"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded border p-2"
          />
        </div>
        <div className="mb-2">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            Submit
          </button>
        </div>
        <div>
          <p className="text-red-500">Kindly respond by August 1, 2024</p>
        </div>
      </form>

      {successModalIsOpen && (
        <Modal content={successModal} closeModal={closeSuccessModal} />
      )}
      {noticeModalIsOpen && (
        <Modal content={noticeModal} closeModal={closeNoticeModal} />
      )}
    </div>
  );
};

export { FormWithTextInput };
