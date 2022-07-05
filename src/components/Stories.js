import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import SingleStories from "./SingleStories";
import {v4 as uuidv4} from 'uuid'
import styles from '../style/Stories.module.css'
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const createUser = () => {
      return {
        name: faker.internet.userName(),
        image: faker.image.people(600, 600, true),
        imageTwo: faker.image.people(600, 600, true),
        id: uuidv4()
      };
    };
    const createUsers = (numUsers = 20) => {
      return Array.from({ length: numUsers }, createUser);
    };
    let fakeUsers = createUsers(20);
    setSuggestions(fakeUsers);
  }, []);

  return (
    <div className={styles.container}>
      {suggestions.map((profile) => (
        <SingleStories
          key={profile.id}
          img={profile.image}
          imgTwo={profile.imageTwo}
          username={profile.name}
        />
      ))}
    </div>
  );
};

export default Stories;
