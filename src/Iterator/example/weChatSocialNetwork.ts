import type SocialNetwork from './socialNetwork';
import WeChatProfileIterator from './weChatProfileIterator';

import type Profile from './profile';
import { ProfileType } from './profile';

class WeChatSocialNetwork implements SocialNetwork {

  // 好友集合
  private profileData: Profile[] = [];

  // 同事集合
  private profileCoworkerData: Profile[] = [];

  constructor(profiles: Profile[]) {
    this.initAddProfileData(profiles);
  }

  // 创建好友迭代器
  createFriendsIterator() {
    return new WeChatProfileIterator(this, ProfileType.friend);
  }

  // 创建同事迭代器
  createCoworkersIterator() {
    return new WeChatProfileIterator(this, ProfileType.coworker);
  }

  // 初始化集合数据
  initAddProfileData(profiles: Profile[]) {
    profiles.forEach((item: Profile) => {
      this.addProfileData(item);
    })
  }

  // 添加集合数据
  addProfileData(profile: Profile) {
    this.profileData.push(profile);
    if(profile.type === ProfileType.coworker) {
      this.profileCoworkerData.push(profile);
    }
  }

  /**
   * 获取对应的集合
   * 实际应用中，可能通过异步接口从服务器获取到对应的朋友集合数据或者同事集合数据
   * 这里通过 profile 注册好友时，通过 type 来区分 好友类型
   **/
  getSocialGraphRequest(type: ProfileType | '') {
    if(type === ProfileType.coworker) {
      return this.profileCoworkerData
    }
    return this.profileData;
  }

}

export default WeChatSocialNetwork;