-- Active: 1743635926160@@localhost@5432@blog_news@news
SELECT tc.table_name, kc.column_name
FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kc ON tc.constraint_name = kc.constraint_name
WHERE
    tc.constraint_type = 'PRIMARY KEY'
ORDER BY tc.table_name;

ALTER TABLE article ADD PRIMARY KEY (id);

ALTER TABLE news.apple ADD PRIMARY KEY (id);

ALTER TABLE news.bitcoin ADD PRIMARY KEY (id);

ALTER TABLE news.business ADD PRIMARY KEY (id);

ALTER TABLE news.entertainment ADD PRIMARY KEY (id);

ALTER TABLE news.health ADD PRIMARY KEY (id);

ALTER TABLE news.sports ADD PRIMARY KEY (id);

ALTER TABLE news.technology ADD PRIMARY KEY (id);

ALTER TABLE news.tesla ADD PRIMARY KEY (id);

ALTER TABLE news.users ADD PRIMARY KEY (id);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);