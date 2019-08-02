# README

##messagesテーブル
|column|type|option|
|------|----|------|
|image|string||
|text|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##groupsテーブル
|group_name|references|null: false, foreign_key: true|
|------|----|------|
### Association
- has_many :messages
- has_many :users, through: : groups_users
- has_many :groups_users

## usersテーブル
|column|type|option|
|------|----|------|
|nickname|string|null: false,index: true|
### Association
- has_many :messages
- has_many :groups, through: : groups_users
- has_many :groups_users

## groups_usersテーブル
|column|type|option|
|------|----|------|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


