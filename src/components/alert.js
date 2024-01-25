import { Fragment } from "react";
import { connect } from "react-redux";
import { CheckCircleIcon } from "@heroicons/react/solid";
const alertTypeToClass = {
  green: "green",
  red: "red",
};
function Alert({ alert }) {
  const displayAlert = () => {
    if (alert !== null) {
      return (
        <div
          className={`rounded-md bg-${alertTypeToClass[alert.alertType]}-500" p-3 absolute top-24 left-0 w-full z-50`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className={`h-5 w-5 text-${alertTypeToClass[alert.alertType]} `}
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <p className='text-sm font-medium text-black'>{alert.msg}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  };
  return <Fragment>{displayAlert()}</Fragment>;
}

const mapStateToProps = (state) => ({
  alert: state.Alert.alert,
});

export default connect(mapStateToProps, {})(Alert);
