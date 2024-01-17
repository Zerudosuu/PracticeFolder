export const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://i.pinimg.com/originals/58/c8/b8/58c8b892f847590145c3e913f36fe48e.png"
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          ullam fugit vero quos id quod assumenda, corrupti nostrum cum!
          Voluptate neque ipsum cum saepe delectus vel alias ipsa maxime
          voluptas!
        </p>
        {/* <img
          src="https://i.pinimg.com/originals/58/c8/b8/58c8b892f847590145c3e913f36fe48e.png"
          alt=""
        /> */}
        <span>Just now</span>
      </div>
    </div>
  );
};
