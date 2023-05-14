import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    Country: "",
    Sate: "",
    City: "",
    Address: "",
    Qualification: "",
    number: "",
    branch: "",
  });
  
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        Country: "",
        Sate: "",
        City: "",
        Address: "",
        Qualification: "",
        number: "",
        branch: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        Country: "",
        Sate: "",
        City: "",
        Address: "",
        Qualification: "",
        number: "",
        branch: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email, Country: tempData.Country, State: tempData.State, City: tempData.City, Address: tempData.Address, Qualification: tempData.Qualification, branch: tempData.branch, number: tempData.number });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <>
    <div className="container-fluid">
        <div className="row justify-content-center FormRow">
        <div className="col-12 HeadingCol">
        <h1 className="text-center text-light p-4"><b>CRUD APP</b></h1>
        </div>
            <div className="col-10 FormCol">
            <div className="min-h-screen">
          
           <div className="max-w-fit m-auto p-10 text-light">
         <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mt-3"><b>Name</b></label>
            <input className="ms-2 mt-3" name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3 text-light"><b>Enter your Email</b></label>
            <input className="ms-2 mt-3" name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>Country</b></label>
            <input className="ms-2 mt-3" name="Country" value={inputs.Country} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>State</b></label>
            <input className="ms-2 mt-3" name="State" value={inputs.State} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>City</b></label>
            <input className="ms-2 mt-3" name="City" value={inputs.City} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>Enter your Address</b></label>
            <input className="ms-2 mt-3" name="Address" value={inputs.Address} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>Enter your Highest Qualification</b></label>
            <input className="ms-2 mt-3" name="Qualification" value={inputs.Qualification} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>Contact Number</b></label>
            <input className="ms-2 mt-3" className="ms-4" name="number" value={inputs.number} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mt-3"><b>Branch</b></label>
            <input className="ms-2 mt-3" name="branch" value={inputs.branch} onChange={handleChange} />
          </div>
          <button type="submit" className="text-light my-5 button-7 mx-5 px-3 py-1" role="button" style={{fontSize:"25px"}}>
            {editClick ? "update" : "Add"}
          </button>
          </form>
         </div>
       </div>
      </div>
      <div className="col-12 TableCol">
         <table className="text-align-center text-light table table-dark table-striped table-hover">
          <thead>
            <tr className="border bg-sucess text-light">
              <th className="border px-4 py-3">Name</th>
              <th className="border px-4 py-3">Email</th>
              <th className="border px-4 py-3">Country</th>
              <th className="border px-4 py-3">State</th>
              <th className="border px-4 py-3">City</th>
              <th className="border px-4 py-3">Address</th>
              <th className="border px-4 py-3">Qualification</th>
              <th className="border px-4 py-3">Number</th>
              <th className="border px-4 py-3">Branch</th>
              <th className="border px-4 py-3" >Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((item, i) => (
              <tr className="border ms-5">
                <td className="">{item.name}</td>
                <td className="border">{item.email}</td>
                <td className="border">{item.contact}</td>
                <td className="border" >{item.Country}</td>
                <td className="border">{item.State}</td>
                <td className="border">{item.City}</td>
                <td className="border">{item.Address}</td>
                <td className="border">{item.Qualification}</td>
                <td className="border">{item.branch}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="mr-3 text-dark EditBtn ms-2" style={{backgroundColor:"black", justifyContent:"center"}}>
                     <i class="fa-solid edit fa-pen-to-square"></i></button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-dark DeletetBtn ms-2" style={{backgroundColor:"black",justifyContent:"center"}}>
                    <i class="fa-solid delete fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

         </div>
        </div>
    </div>
    </>
  );
};

export default Form;