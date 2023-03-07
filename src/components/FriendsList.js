import { useState} from "react";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <h2 className="text-xl font-bold p-2">Gizli Kullanıcı Listesi</h2>
      <p>Burası aslında gizli bilgi.</p>

      <div className="py-6">
        {friends.map((u) => (
          <div className="p-4 flex bg-white shadow mb-4" key={u.id}>
            <img className="w-24" src={u.profilepicture} alt="" />
            <div className="p-4 text-left">
              <h3 className="font-bold text-lg">{u.name}</h3>
              <p>{u.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
