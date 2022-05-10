function EmailDetail(props) {
  return (
    <div>
      <p>{props.email.title}</p>;
      <button onClick={() => props.setShowEmail(!props.showEmail)}>
        Return To Emails
      </button>
      {props.showEmail && props.setShowEmail}
    </div>
  );
}

export default EmailDetail;
