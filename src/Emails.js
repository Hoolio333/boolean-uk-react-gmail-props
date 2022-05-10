import Email from "./Email";

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
          setShowEmail={props.setShowEmail}
        />
      ))}
    </ul>
  );
}

export default Emails;
