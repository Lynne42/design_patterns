import type ProfileIterator from './profileIterator';

interface SocialNetwork {
  // 好友迭代器
  createFriendsIterator(): ProfileIterator;

  // 同事迭代器
  createCoworkersIterator(): ProfileIterator;

}

export default SocialNetwork;