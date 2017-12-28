export const getUsers = (page) => {
  return new Promise((accept, reject) => {
    fetch(`https://api.storify.com/v1/users?page=${page}&per_page=100`)
      .then((resp) => resp.json())
      .then((json) => accept(json));
  });
};
