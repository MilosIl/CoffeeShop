import Avatar from "@/assets/Avatar.svg";
const ProfileInformation = ({ name, email }) => {
  return (
    <div className="mb-15">
      <img
        src={Avatar}
        alt="user_image"
        className="mx-auto mb-4 rounded-full w-24 h-24"/>
      <p className="mb-3 font-semibold text-dark-blue text-lg leading-5">{name}</p>
      <p className="font-medium text-[#717171] text-sm text-center leading-5">
        {email}
      </p>
    </div>
  );
};

export { ProfileInformation };
