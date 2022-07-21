import {useState} from "react";
import Nav from "../Components/navbar";
import Footer from "../Components/Footer";

const OnBoarding = () => {
    const [formInfo, setFormInfo] = useState(
        {
            user_id:"",
            first_name:'',
            dob_day:"",
            dob_month:"",
            dob_year:"",
            gender_identity:"",
            show_gender:false,
            gender_interest:"",
            about:"",
            email:"",
            url:"",
            matches:[]
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        console.log(e);
        const value = (e.target.type === "checkbox" ? e.target.checked : e.target.value)
        const name = e.target.name
   console.log(name +" "+value)
        setFormInfo({...formInfo , [name]:e.target.value});
    }
    console.log(formInfo);
    return (
        <>
            <Nav showModel={false} minimal={true} setShowModal={() => {
            }}/>

            <div className="onBoarding">
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="first name"
                            required={true}
                            value={formInfo.first_name}
                            onChange={handleChange}
                        />
                        <label>Birthday</label>
                        <div className="multiple-input-cont">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="dd"
                                required={true}
                                value={formInfo.dob_day}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="mm"
                                required={true}
                                value={formInfo.dob_month}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="yyyy"
                                required={true}
                                value={formInfo.dob_year}
                                onChange={handleChange}
                            />
                        </div>
                        <label>Gender</label>
                        <div className="multiple-input-cont">
                            <input
                                type="radio"
                                name="gender_identity"
                                id="man-gender-identity"
                                value="man"
                                checked={formInfo.gender_identity==="man"}
                                onChange={handleChange}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                type="radio"
                                name="gender_identity"
                                id="woman-gender-identity"
                                value="woman"
                                checked={formInfo.gender_identity==="woman"}
                                onChange={handleChange}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                type="radio"
                                name="gender_identity"
                                id="more-gender-identity"
                                value="more"
                                checked={formInfo.gender_identity==="more"}
                                onChange={handleChange}
                            />
                            <label htmlFor="more-gender-identity">More</label>
                        </div>
                        <label htmlFor="show_gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}

                        />
                        <label htmlFor="show_me">Show me</label>
                        <div className="multiple-input-cont">
                            <input
                                type="radio"
                                name="gender_interest"
                                id="man-gender-interest"
                                value="man"
                                checked={formInfo.gender_interest==="man"}
                                onChange={handleChange}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                type="radio"
                                name="gender_interest"
                                id="woman-gender-interest"
                                value="woman"
                                checked={formInfo.gender_interest==="woman"}
                                onChange={handleChange}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                type="radio"
                                name="gender_interest"
                                id="everyone-gender-interest"
                                value="everyone"
                                checked={formInfo.gender_interest==="everyone"}
                                onChange={handleChange}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>
                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            value={formInfo.about}
                            placeholder="I like long walks.."
                            onChange={handleChange}
                        />
                        <input type="submit"/>
                    </section>
                    <section>

                        <label htmlFor="url">Profile pic</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            value={formInfo.url}
                            required={true}
                            onChange={handleChange}
                        />
                        <div className="photo-container">
                            <img src={formInfo.url} alt="profile-img"/>
                        </div>
                    </section>
                </form>
            </div>
            <hr/>
            <Footer />
        </>
    );
}

export default OnBoarding;