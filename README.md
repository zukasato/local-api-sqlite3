# webapi_practice(SQLite3バージョン)

全員の情報を見る（日付で絞り込み）<br>
http://localhost:3000/<br>

ユーザー登録ページ<br>
http://localhost:3000/create.html<br>

ユーザー編集ページ<br>
http://localhost:3000/edit.html?uid=1<br>

出席・体温・体調の入力ページ<br>
http://localhost:3000/conditions.html?uid=1<br>

出席・体温・体調の一覧ページ<br>
http://localhost:3000/conditions-edit.html?uid=1


```
CREATE TABLE users (
  id INTEGER NOT NULL PRIMARY KEY,
  last_name TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name_kana TEXT,
  first_name_kana TEXT,
  email TEXT NOT NULL,
  class TEXT NOT NULL,
  normal_temperature TEXT NOT NULL,
  users_created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  users_updated_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);
```

```
INSERT INTO users (last_name, first_name, email, class, normal_temperature) VALUES ("山田", "太郎", "yamada@gmail.com", "3-1", "36.6" );
INSERT INTO users (last_name, first_name, email, class, normal_temperature) VALUES ("鈴木", "春子", "suzuki@gmail.com", "3-1", "36.7" );
INSERT INTO users (last_name, first_name, email, class, normal_temperature) VALUES ("遠藤", "一郎", "endo@gmail.com", "3-1", "36.8" );
INSERT INTO users (last_name, first_name, email, class, normal_temperature) VALUES ("市川", "夏子", "ichikawa@gmail.com", "3-1", "36.9" );
INSERT INTO users (last_name, first_name, email, class, normal_temperature) VALUES ("大木", "次郎", "oki@gmail.com", "3-1", "36.7" );
INSERT INTO users (last_name, first_name, email, class, normal_temperature) VALUES ("山本", "花子", "oki@gmail.com", "3-1", "36.7" );
```
```
CREATE TABLE conditions (
  id INTEGER NOT NULL,
  date TEXT NOT NULL,
  temperature TEXT NOT NULL,
  attendance TEXT NOT NULL,
  reason TEXT,
  other_reason TEXT,
  feelings TEXT NOT NULL,
  conditions_created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  conditions_updated_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  FOREIGN KEY (id) references users(id)
);
```

```
INSERT INTO conditions (id, date, temperature, attendance, reason, other_reason, feelings ) VALUES ("1", "2021-07-08", "37.0", "欠席", "熱", "明日も休みます","&#x1f616;" );
INSERT INTO conditions (id, date, temperature, attendance, feelings ) VALUES ("2", "2021-07-08", "36.5", "出席","&#x1f603;" );
INSERT INTO conditions (id, date, temperature, attendance, feelings ) VALUES ("3", "2021-07-08", "36.3", "出席","&#x1f610;" );
INSERT INTO conditions (id, date, temperature, attendance, feelings ) VALUES ("4", "2021-07-08", "36.2", "出席","&#x1f616;" );
INSERT INTO conditions (id, date, temperature, attendance, reason, other_reason, feelings ) VALUES ("5", "2021-07-08", "37.0", "欠席", "咳", "病院にいきます","&#x1f616;" );
INSERT INTO conditions (id, date, temperature, attendance, feelings ) VALUES ("6", "2021-07-08", "36.1", "出席","&#x1f603;" );

```


### Node.js + express 参考<br>
https://youtu.be/9GGRICOjA4c?list=PLX8Rsrpnn3IVW5P1H1s_AOP0EEyMyiRDA<br>

