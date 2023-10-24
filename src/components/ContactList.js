const ContactList = ({data}) => {
  return (
    <div className="contact-list">
      <div className="list">
        <p className="name-display">{data.name}</p>
        <p className="email-display">{data.email}</p>
        <button id="delete-btn">Delete</button>
      </div>
    </div>
  );
};
export default ContactList;
