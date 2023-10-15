import React, { useState } from 'react';

const initialStudentData = [
    { key: 'Name', value: 'John', type: "text" },
    { key: 'Age', value: 20 },
    { key: 'Gender', value: 'Male' },
    { key: 'Major', value: 'Computer Science' },
    { key: 'GPA', value: 3.7 },
    { key: 'Email', value: 'john@email.com' },
    { key: 'Address', value: '123 Main Street' },
    { key: 'Phone', value: '(123) 456-7890' },
    { key: 'Hobbies', value: 'Reading, Swimming' },
];

function Profile() {
    const [isEdit, setIsEdit] = useState(false);
    const [studentData, setStudentData] = useState(initialStudentData);

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleInputChange = (index, value) => {
        const updatedData = [...studentData];
        updatedData[index].value = value;
        setStudentData(updatedData);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
    };

    return (
        <>
            <div className="w-full h-auto bg-gray-900">
                <div className='xs:w-full md:w-full lg:w-3/4 xl:w-[75%] xs:h-[17%] sm:h-[25%] md:h-[25%] lg:h-[25%] xl:h-[25%] m-auto flex' style={{ border: "0.5px solid #607D8B" }}>
                    <div className='xs:w-[35%] sm:w-[25%]  md:w-[20%] lg:w-[22%] xl:w-[17%] xl:h-[25vh] lg:h-[25vh] md:h-[22vh] sm:h-[20vh] xs:h-[16vh] rounded-[50%]' >
                        <img className='w-[95%] h-[95%] rounded-[50%] m-auto' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais" alt="users_profile" />
                    </div>
                    <div className='flex-grow'>
                        <div>
                            <h2 className="font-Orbitron text-yellow-100 ml-[30px] md:ml-[80px] lg:ml-[130px] xl:ml-[150px] text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">Profile Details</h2>
                        </div>
                        <div>
                            <h2 className="font-Orbitron text-blue-400 ml-[30px] md:ml-[80px] lg:ml-[130px] xl:ml-[150px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] mt-[40px] md:mt-[50px] lg:mt-[70px] xl:mt-[30px]">Name</h2>
                        </div>
                        <p className="font-Orbitron text-white ml-[30px] md:ml-[80px] lg:ml-[130px] xl:ml-[150px] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[19px] mt-[5px] border-b border-white w-[50%]">Student xyz</p>
                    </div>
                </div>
                {/* my profile section here */}

                <div className='mt-[2%] xl:mt-[1%] xs:w-full md:w-full lg:w-3/4 xl:w-[75%] xs:h-[80%] sm:h-[72%] md:h-[70%] lg:h-[72vh] xl:h-[72.5vh] m-auto flex' style={{ border: "0.5px solid #607D8B" }}>

                    {!isEdit ? (
                        <div className='w-[100%] h-[100%] flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
                            <div className="xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%] xl:w-[60%] xs:h-[49%] sm:h-[49%] md:h-[49%] lg:h-[100%] xl:h-[100%] xs:mb-[1%]" >
                                <div className="bg-gray-900 p-5">
                                    <div className="max-w-lg mx-auto bg-white p-2 rounded-lg shadow-lg">
                                        <h1 className="text-2xl font-bold mb-2">Student Information</h1>
                                        <ul>
                                            {studentData.map((item, index) => (
                                                <div key={index}>
                                                    <li className="mb-3">
                                                        <span className="font-semibold">{item.key}:</span> {item.value}
                                                    </li>
                                                    {index !== studentData.length - 1 && (
                                                        <hr className="my-2 border-gray-300" />
                                                    )}
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] xl:w-[40%] xs:h-[49%] sm:h-[49%] md:h-[49%] lg:h-[100%] xl:h-[100%]" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <div className="mt-10">
                                    <div className="flex items-center">

                                        <button onClick={toggleEdit} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 w-[180px] rounded">
                                            Edit
                                        </button>

                                    </div>


                                    <div className="mt-10">
                                        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 w-[180px] rounded">
                                            Button
                                        </button>
                                    </div>


                                    <div className="mt-5 font-Orbitron text-white " style={{ textAlign: "center" }}>
                                        Or
                                    </div>


                                    <div className="mt-5">
                                        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 w-[180px] rounded">
                                            Button
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ) : (
                        <div className='w-[100%] xs:h-[83vh] smh-[83vh] md:h-[78vh] lg:h-[78vh] xl:h-[78vh]' >
                            <form onSubmit={handleFormSubmit} className='w-[100%] h-[100%] bg-gray-900 flex'>
                                <div style={{ flex: 2 }}>
                                    <div className="p-4">
                                        {studentData.map((item, index) => (
                                            <div key={index} className=' xs:m-[9%] mid:m[1%] sm:m-[4%] md:m-[5%] lg:m-[5%] xl:m-[4.5%]'>
                                                <label htmlFor={item.key} className="font-Orbitron text-blue-400">{item.key}:</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ flex: 3 }}>
                                    <div className="p-4">
                                        {studentData.map((item, index) => (
                                            <div key={index} className="font-Orbitron">
                                                <input
                                                    id={item.key}
                                                    // value={item.value}
                                                    type={item.type}
                                                    style={{ margin: "1.5%", background: "transparent", border: "0.5px solid #607D8B", color: "#fff" }}
                                                    className='m:md-[40px]'
                                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                                />
                                            </div>
                                        ))}
                                        <div className="flex ">
                                            <button type="submit" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 w-[100px] ml-[1.3%] rounded">
                                                Save
                                            </button>
                                            <button onClick={toggleEdit} className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 w-[100px] ml-[1.3%] rounded">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>


        </>
    );
}

export default Profile;