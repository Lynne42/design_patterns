迭代器模式

案例： /example 文件夹下

遍历一个封装了访问微信好友关系功能的特殊集合。 该集合提供使用不同方式遍历档案资料的多个迭代器

- profileIterator: 定义迭代器接口
- socialNetwork: 定义数据集合接口

- profile: 定义微信好友数据信息


- weChatProfileIterator: 定义实际的微信数据迭代器
- weChatSocialNetwork: 定义实际的微信数据集合类