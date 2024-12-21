let CurrentTime = () => {
  let time = new Date();

  return (
    <p classNameNameName="lead">
      This i the current time: {time.toLocaleDateString()}-{""}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
