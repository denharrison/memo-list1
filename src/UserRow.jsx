import { memo, useRef } from "react";

const UserRow = memo ( ({ user, onSelect, isSelected }) => {

  const renders = useRef(0);
  renders.current++;

  return (
    <div
      style={{
        padding: 6,
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee",
        cursor: "pointer",
        background: isSelected ? "#f3f8ff" : "transparent",
      }}
      onClick={() => onSelect(user.id)}
    >
      <span>
        {user.name}{" "}
        <small style={{ color: "#999" }}>(renders: {renders.current})</small>
      </span>
      <span style={{ color: "#666" }}>{user.role}</span>
    </div>
  );
  
})

export default UserRow