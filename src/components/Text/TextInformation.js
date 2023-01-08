const TextInformation = (props) => {
  return (
    <div style={{ color: props.color }}>
      <span style={{ color: "var(--text-title-describe)" }}>{props.title}</span>
      {/* {props.text} */}
      <p dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
};
export default TextInformation;
