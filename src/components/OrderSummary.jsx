import Modal from "../UI/Modal";
import { UserProgressContext } from "../store/UserProgressContext";
import { useContext } from "react";

export default function OrderSummary() {
  const progressCtx = useContext(UserProgressContext);

  return (
    <Modal open={progressCtx.progress === "summary"} onClose={progressCtx.hideSummary}>
      <h2>Success!</h2>
      <p>
        your order was submitted successfully. we will get back to you with more
        details via email within the next few minutes.
      </p>
      <p className="modal-actions">
        <button onClick={progressCtx.hideSummary}>okay</button>
      </p>
    </Modal>
  );
}
