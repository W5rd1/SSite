function FetchSuccess(stream) {
  const FETCH_SUCCESS = "FETCH_Success";
  return {
    type: FETCH_SUCCESS,
    status: "success",
    stream
  };
}

export default FetchSuccess;
