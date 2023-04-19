import Profile, { ProfileType } from './profile';
import WeChatSocialNetwork from './weChatSocialNetwork';
import type { ProfileInfo } from './profile';

const data: ProfileInfo[] = [
  { id: 1, email: '1@qq.com', type: '' },
  { id: 2, email: '2@qq.com', type: ProfileType.coworker },
  { id: 3, email: '3@qq.com', type: '' },
  { id: 4, email: '4@qq.com', type: ProfileType.coworker },
];

function main() {
  const profiles: Profile[] = data.map((item: ProfileInfo) => new Profile(item));
  const weChatSocialNetwork = new WeChatSocialNetwork(profiles);

  const friendsIterator = weChatSocialNetwork.createFriendsIterator();

  while(friendsIterator.hasMore()) {
    console.log(1, friendsIterator.getNext())
  }
  
  const coworkersIterator = weChatSocialNetwork.createCoworkersIterator();
  while(coworkersIterator.hasMore()) {
    console.log(2, coworkersIterator.getNext())
  }

}

main();
