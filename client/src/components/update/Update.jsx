import "./update.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useState } from "react";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";
const Update = ({ setOpenUpdate, user }) => {
  const { currentUser } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    profilePicture: "",
    coverPicture: "",
    name: "",
    city: "",
    website: "",
  });
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/uploads", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    let coverUrl = user.coverPicture;
    let profileUrl = user.profilePicture;
    coverUrl = cover && (await upload(cover));
    profileUrl = profile && (await upload(profile));
    mutation.mutate({
      ...inputs,
      coverPicture: coverUrl,
      profilePicture: profileUrl,
    });
    setOpenUpdate(false);
  };
  return (
    <div className="update">
      <form>
        <input
          type="file"
          name="profilePicture"
          onChange={(e) => setProfile(e.target.files[0])}
        />

        <input
          type="file"
          name="coverPicture"
          onChange={(e) => setCover(e.target.files[0])}
        />
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="city" onChange={handleChange} />
        <input type="text" name="website" onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
      </form>
      <button className="close" onClick={() => setOpenUpdate(false)}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Update;
