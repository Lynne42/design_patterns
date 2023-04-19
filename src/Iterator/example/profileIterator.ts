import type Profile from './profile';

interface ProfileIterator {
  // 获取下一个元素
  getNext() : Profile | null;

  // 获取下一个元素
  // getPrev() : Profile | null;

  // 获取当前迭代的元素位置
  // getCurrentPosition(): number;

  // 判断是否有更多元素
  hasMore(): boolean;
}

export default ProfileIterator;