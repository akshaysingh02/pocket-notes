import "../styles/Group.scss";


const getInitials = (name) => {
  const words = name.trim().split(' ');
  const firstInitial = words[0][0] || '';
  const lastInitial = (words.length > 1) ? words[words.length - 1][0] : '';
  return (firstInitial + lastInitial).toUpperCase();
};

function Group({ groups, selectGroup }) {
  
  return (
    <ul>
      {groups.map((group) => (
        <li key={group.id} onClick={()=>selectGroup(group.id)}>
          <div className="group-wrapper">
            <div className="group-initials-wrapper" style={{backgroundColor: group.color}} >{getInitials(group.name)}</div>
            <h3>{group.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Group;
