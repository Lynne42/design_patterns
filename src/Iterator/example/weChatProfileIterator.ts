import type ProfileIterator from './profileIterator';
import type WeChatSocialNetwork from './weChatSocialNetwork';

import type Profile from './profile';
import { ProfileType } from './profile';


class WeChatProfileIterator implements ProfileIterator {
  //
  private weChat: WeChatSocialNetwork;
  // 当前迭代器类型
  private iteratorType: ProfileType | '' = '';

  // 迭代的当前位置
  private currentPosition: number = 0;

  // 当前迭代的数据集合
  private gatherData: Profile[] = [];

  constructor(actualGather: any, type: ProfileType | '') {
    this.weChat = actualGather;
    this.iteratorType = type;
  }

  // 获取当前迭代器访问的集合数据
  getGatherData() {
    const data: Profile[] = this.weChat.getSocialGraphRequest(this.iteratorType)
    this.gatherData = data;
  }

  hasMore() {
    this.getGatherData();
    return this.currentPosition < this.gatherData.length
  };

  getNext() {
    if(this.hasMore()) {
      const data = this.gatherData[this.currentPosition];
      this.currentPosition++;
      return data
    }
    return null
  };

  
}

export default WeChatProfileIterator;