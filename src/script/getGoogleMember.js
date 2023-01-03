// POST
async function postUser() {
  try {
    // POST 요청은 body에 실어 보냄
    const response = await axios.post(
      "http://localhost:8080//oauth2/authorization/google",
      {}
    );
  } catch (e) {
    console.error(e);
  }
}
