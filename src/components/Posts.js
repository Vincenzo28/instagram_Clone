import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { v4 as uuidv4 } from "uuid";
import styles from "../style/Posts.module.css";

const Posts = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const createUser = () => {
      return {
        name: faker.internet.userName(),
        likeUsername: faker.internet.userName(),        
        image: faker.image.people(600, 600, true),
        profilePhoto: faker.image.people(600, 600, true),
        likePhoto: faker.image.people(600, 600, true),
        location: faker.address.cityName(),
        randomNumber: faker.random.numeric(2),
        randomComment: faker.random.numeric(2),
        randomHours: faker.random.numeric(1),
        phrase: faker.lorem.sentence(),
        id: uuidv4(),
      };
    };
    const createUsers = (numUsers = 20) => {
      return Array.from({ length: numUsers }, createUser);
    };
    let fakePosts = createUsers(20);
    setSuggestions(fakePosts);
  }, []);

  return (
    <div className={styles.container}>
      {suggestions.map((profile) => (
        <SinglePost
          key={profile.id}
          img={profile.image}
          username={profile.name}
          likeUsername = {profile.likeUsername}
          location = {profile.location}
          randomNumber = {profile.randomNumber}
          randomHours = {profile.randomHours}
          profilePhoto = {profile.profilePhoto}
          phrase = {profile.phrase}
          likePhoto = {profile.likePhoto}
          randomComment = {profile.randomComment}
        />
      ))}
    </div>
  );
};

export default Posts;
