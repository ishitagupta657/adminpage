import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const deleteUser = (id) => {
    console.log("hi" + id);
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      <ul>
        {data.map((user, id) => (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .delete-icon {
    font-size: 1.5rem;
    color: #f12711;
  }
`;

export default DisplayUsers;
