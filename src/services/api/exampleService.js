import client from './client';

const create = username => {
  return client(
    {
      url: 'devs',
      method: 'POST',
      data: {
        username: username,
      },
    },
    //{ errorHandle: false }
  );
};

export default { create };
