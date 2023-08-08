import styles from "./Menu.module.css";

function Menu(props) {
  const menus = [
    { id: "expense", title: "01" },
    { id: "concept", title: "02" },
    { id: "course-goal", title: "03" },
  ];

  function menuHandler(id) {
    props.onClickMenu(id);
  }

  return (
    <div className={`${styles.menu}`}>
      {menus.map((mn, index) => (
        <button 
            key={index} 
            onClick={() => menuHandler(mn.id)}
            className={props.activeMenu === mn.id ? styles.active : ''}
        >
          {mn.title}
        </button>
      ))}
    </div>
  );
}

export default Menu;
