import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { Modal } from '@/modal/modal';
import type { InviteeModel } from '@/types/inviteeModel';

const baseForm: InviteeModel = {
  firstName: '',
  lastName: '',
  group: '',
  status: null,
};

function AddInviteeFormComponent() {
  const [formData, setFormData] = useState(baseForm);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  const successModal = {
    title: 'Success',
    content: 'Invitee added',
  };

  const closeSuccessModal = () => {
    router.reload();
    setSuccessMessage(false);
  };

  const closeErrorModal = () => {
    setErrorMessage(false);
  };

  const errorModal = {
    title: 'Error',
    content: 'Something went wrong',
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await axios.post('/api/invites', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSuccessMessage(true);
      setFormData(baseForm);
    } catch (e) {
      setErrorMessage(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center  dark:border-gray-700 dark:bg-gray-800"
      >
        <div>
          <input
            name="firstName"
            placeholder="Given Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="m-5 rounded text-left dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <div>
          <input
            name="lastName"
            placeholder="Surname"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="m-5 rounded text-left dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <div>
          <input
            name="group"
            placeholder="Group"
            value={formData.group}
            onChange={handleChange}
            className="m-5 rounded text-left dark:border-gray-700 dark:bg-gray-800"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="m-5 w-full items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto md:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <Modal content={successModal} closeModal={closeSuccessModal} />
      )}
      {errorMessage && (
        <Modal content={errorModal} closeModal={closeErrorModal} />
      )}
    </div>
  );
}

export default AddInviteeFormComponent;
