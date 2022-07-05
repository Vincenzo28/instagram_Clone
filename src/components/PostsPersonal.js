import SinglePostPersonal from "./singlePostPersonal";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const PostsPersonal = () => {
    const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const createUser = () => {
      return {
        image: faker.image.sports(600, 600, true),
        id: uuidv4(),
      };
    };
    const createUsers = (numUsers = 12) => {
      return Array.from({ length: numUsers }, createUser);
    };
    let fakePosts = createUsers(12);
    setSuggestions(fakePosts);
  }, []);

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
      {suggestions.map((profile) => (
        <SinglePostPersonal
          key={profile.id}
          image={profile.image}
        />
      ))}
    </div>
  );
};

export default PostsPersonal;
