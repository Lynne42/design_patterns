import type Profile from './profile';

interface ProfileIterator {
  getNext() : Profile | null;

  hasMore(): boolean;
}

export default ProfileIterator;