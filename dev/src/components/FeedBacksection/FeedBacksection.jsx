import { useState } from "react";
import Button from "../Button/Button";

export default function FeedBacksection() {
  const [form, setForm] = useState({
    name:'',
    email: '',
    genre: '',
    hasError: true
  });
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [genre, setGenre] = useState('');
  // const [hasError, setHasError] = useState(false);
  // function hadleInputChange(event, handleState) {
  //   handleState(event.target.value);
  //   setHasError(event.target.value.trim().length === 0);
  
  // }
    function hadleInputChange(event) {
    setForm({
      name: event.target.value,
      email: event.target.value,
      hasError: event.target.value.trim().length === 0,
    });
  
  }

  return (
    <>
      <div className="m-4 feedback-form">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label text-light">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="NameHelp"
              value={form.name}
              style={{
                border: form.hasError ? "1px solid red" : null,
              }}
              // onChange={(event) => hadleInputChange(event, setName)}
              onChange={hadleInputChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-light"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={form.email}
             onChange={(email) => hadleInputChange(email, setForm)}
              // onChange={hadleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="genre" className="form-label text-light">
              Какой жанр хотели бы добавить в фильтр
            </label>
            <select
              id="genre"
              className="form-select form-control"
              aria-label="Default select example"
              value={form.genre}
              // onChange={(event) => setGenre(event.target.value)}
            >
              <option value="detective">detective</option>
              <option value="triller">triller</option>
              <option value="fantasy">fantasy</option>
              <option value="crime">crime</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              className="form-check-input form-control"
              id="exampleCheck1"
            />
            <label
              className="form-check-label  text-light"
              htmlFor="exampleCheck1"
            >
              Check me out
            </label>
          </div>
          {/* <pre>
            <p className=" text-light"> Email : {form.email}</p>
            <p className=" text-light"> Name : {form.name}</p>
            <p className=" text-light"> Genre : {form.genre}</p>
          </pre> */}
          <Button
            type="submit"
            disabled={form.hasError}
            isActive={!form.hasError}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
