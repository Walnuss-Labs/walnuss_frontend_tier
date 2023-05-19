import http from "../http-common";

const getAll = () => {
  let result;
  try {
      result = http.get("/tutorials");
  }
  catch (err) {
    alert(err);
  }
  return result;
};

const get = id => {
  let result;
  try {
    result = http.get(`/tutorials/${id}`);
  } catch (err) {
    alert(err);
  }
  return result;
};

const create = data => {
  let result;
  try {
    result = http.post("/tutorials", data);
  } catch (err) {
    alert(err);
  }
  return result;
};

const update = (id, data) => {
  let result;
  try {
    result =  http.put(`/tutorials/${id}`, data);
  } catch (err) {
    alert(err);
  }
  return result;
};

const remove = id => {
  let result;
  try {
    result = http.delete(`/tutorials/${id}`);
  } catch (err) {
    alert(err);
  }
  return result;
};

const removeAll = () => {
  let result;
  try {
    result = http.delete(`/tutorials`);
  } catch (err) {
    alert(err);
  }
  return result;
};

const findByTitle = title => {
  let result;
  try {
    result = http.get(`/tutorials?title=${title}`);
  } catch (err) {
    alert(err);
  }
  return result;
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
