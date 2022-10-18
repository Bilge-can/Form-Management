import "./App.css";
import  { useFormik}  from "formik";

function App() {
    const { handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            firstName: 'Bilge',
            lastName: 'Can',
            email: 'bbbbb@gmail.com',
            gender: 'female',
            hobies: [],
            country: "Turkey",
        },
        onSubmit: values => {
            console.log(values);
        },
    });
  return (
    <div className="App">
        <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="firstName">First Name</label>
                  <input name="firstName" value={values.firstName} onChange={handleChange}/>

                  <br/>
                  <br/>

                  <label htmlFor="lastName">Last Name</label>
                  <input name="lastName" value={values.lastName} onChange={handleChange}/>

                  <br/>
                  <br/>

                  <label htmlFor="email">Email</label>
                  <input name="email" value={values.email} onChange={handleChange}/>

                    <br/>
                    <br/>

                    <span>Male</span>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            checked={values.gender === "male"}
                        />

                    <span>Female</span>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={values.gender === "female"}
                    />

                    <br/>
                    <br/>

                    <div>
                        <input type="checkbox" name="hobies" value="Körling" onChange={handleChange}/>
                        Körling
                    </div>

                    <div>
                        <input type="checkbox" name="hobies" value="Voleybol" onChange={handleChange}/>
                        Voleybol
                    </div>

                    <div>
                        <input type="checkbox" name="hobies" value="Tenis" onChange={handleChange}/>
                        Tenis
                    </div>

                    <br/>
                    <br/>

                    <select name="country" value={values.country} onChange={handleChange}>
                        <option value="turkey">Turkey</option>
                        <option value="england">England</option>
                        <option value="usa">USA</option>
                    </select>

                    <br/>
                    <br/>

                  <button type="submit">Submit</button>

                    <br/>
                    <br/>

                    {JSON.stringify(values)}
                </form>
      </div>
  );
}
export default App;
