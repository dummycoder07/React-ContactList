import ContactList from "./ContactList";

const AddContact = () => {
  const Contacts = [
    {
      name: "Aman",
      email: "aman@gmail.com",
    },
    {
      name: "Abhay",
      email: "abhay@gmail.com",
    },
    {
      name: "Munawar",
      email: "standup@gmail.com",
    },
  ];
  return (
    <>
      <div className="addContact">
        <h1>Add Contact</h1>
        <form className="details">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
        </form>
        <form className="details">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
            />
          </div>
        </form>
        <button id="btn" type="submit">
          Submit
        </button>
        <hr />
      </div>
      {Contacts.map((contact) => {
        return <ContactList data={contact} />;
      })}
    </>
  );
};
export default AddContact;
