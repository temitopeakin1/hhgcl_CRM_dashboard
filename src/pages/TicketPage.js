import { useState } from "react";

const Ticketpage = () => {
  const [formData, setFormData] = useState({
    status: "Employed/ Not employed",
    progress: 0,
    timeStamp: new Date().toISOString(),
  });
  const editMode = false;

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const categories = ["test1", "test2"];

  console.log(formData);
  return (
    <div className="ticket">
      <h1>{editMode ? "Update Ticket" : "Create Ticket"}</h1>
      <div className="ticket-container"></div>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="fullname"
            type="text"
            onChanged={handleChange}
            required={true}
            value={formData.title}
          />
          <label htmlFor="new role">New Role</label>
          <input
            id="new-role"
            name="role"
            type="text"
            onChanged={handleChange}
            required={true}
            value={formData.role}
          />
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories?.map((category, _index) => (
              <option key={_index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="new-category">New Category</label>
          <input
            id="new-category"
            name="category"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.category}
          />

          <label>Priority</label>
          <div className="multiple-input-container">
            <input
              id="priority-1"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={1}
              checked={formData.priority === 1}
            />

            <label htmlFor="priority-2">2</label>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={2}
              checked={formData.priority === 2}
            />
            <label htmlFor="priority-3">3</label>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={3}
              checked={formData.priority === 3}
            />
            <label htmlFor="priority-4">4</label>
            <input
              id="priority-4"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={4}
              checked={formData.priority === 4}
            />
            <label htmlFor="priority-5">5</label>
            <input
              id="priority-5"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={5}
              checked={formData.priority === 5}
            />
            <label htmlFor="priority-1">1</label>
          </div>

          {editMode && (
            <>
              <input
                type="range"
                id="progress"
                name="progress"
                value={formData.progress}
                min="0"
                max="100"
                onChange={handleChange}
              />
              <label htmlFor="progress">Progress</label>

              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option
                  selected={formData.status === "completed"}
                  value="completed"
                >
                  Done
                </option>
                <option
                  selected={formData.status === "still on course"}
                  value="still on course"
                >
                  Still on Course
                </option>
                <option
                  selected={formData.status === "Not started"}
                  value="not started"
                >
                  Not Started
                </option>
              </select>
            </>
          )}
        </section>
      </form>
    </div>
  );
};

export default Ticketpage;
