import { useContext, useRef, useState } from "react";
import { UserType } from "./hocs/withAuth";
import { userUrl } from "@/utils/network";
import { ActionTypes, store } from "./StoreProvider";
import { toast } from "react-toastify";
import useAxiosHandler from "@/utils/axiosHandler";

const UpdateUser = ({ closeModal }: { closeModal: () => void }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { dispatch } = useContext(store);
  const { axiosHandler } = useAxiosHandler();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const arg = {
      name: form.current?.callName.value,
    };

    const res = await axiosHandler<UserType>({
      method: "PATCH",
      url: userUrl.updateUsername,
      isAuthorized: true,
      data: arg,
    });

    setLoading(false);

    if (res.data) {
      toast("Updated name successfully", { type: "success" });
      dispatch({ type: ActionTypes.UpdateUser, payload: res.data });
      setTimeout(() => {
        closeModal();
      }, 1500);
    }
  };

  return (
    <div>
      <div className="modalHeading">
        <div className="title">Add Username</div>
      </div>
      <form ref={form} onSubmit={onSubmit}>
        <div className="modalBody userUpdate">
          <div className="formGroup">
            <label htmlFor="CallName">Name</label>
            <input id="CallName" name="callName" required />
          </div>
        </div>
        <div className="modalFooter">
          <button type="submit" disabled={loading}>
            Update{loading && "..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
