import classes from "./loading.module.css";

const loading = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div className={classes.spinner} />
    </div>
  );
};

export default loading;
