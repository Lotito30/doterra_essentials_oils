import { connect } from "react-redux";
import { CheckCircleIcon } from "@heroicons/react/solid";

function Alert({ alert }) {
  return (
    <div
      className={`rounded-md bg-${
        alert?.alertType
      }-500 p-3 absolute top-6 left-1/2 -translate-x-1/2 w-auto z-50 mx-auto -translate-y-10 transition-transform ease-in-out transform ${
        alert ? "translate-y-10 opacity-100" : "translate-y-0 opacity-0"
      } duration-300`}
    >
      <div className="flex items-center gap-2 justify-center">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className={`h-6 w-6 text-white `}
            aria-hidden="true"
          />
        </div>
        <div>
          <p className="text-md font-medium text-white">{alert?.msg}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  alert: state.Alert.alert,
});

export default connect(mapStateToProps, {})(Alert);
