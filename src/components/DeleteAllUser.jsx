import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    console.log("hi");
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <button className="clear-btn" onClick={deleteUsers}>Clear Users</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export default DeleteAllUser;
