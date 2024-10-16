import React, { useState } from "react";
import Form from "./Form";
function Admin() {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);

  const formToAdmin = (data) => {
    setShowAddCourseForm(data);
  };
  return (
    <div className="font-poppins tracking-wide">
      <div className="w-[96%]">
        <div className="mt-10 ml-20 flex gap-12">
          <div>
            <button
              onClick={() => {
                setShowAddCourseForm((prev) => !prev);
              }}
              className=" px-4 py-3 bg-blue-500 text-white text-sm font-semibold rounded-md"
              disabled={showAddCourseForm}
            >
              Add course
            </button>
          </div>
          <div className=" w-11/12 ">
            {showAddCourseForm ? (
              <div className=" bg-slate-50 rounded-md p-1">
                <Form
                  formToAdmin={formToAdmin}
                  showAddCourseForm={showAddCourseForm}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
