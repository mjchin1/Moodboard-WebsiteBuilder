const client = require("./client");
const { websiteContent, users, userWebsites } = require("./seedData");

async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
      DROP TABLE IF EXISTS website_content CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS user_websites CASCADE;
    `);
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Building All Tables...");
    await client.query(`
        CREATE TABLE website_content (
            website_id SERIAL PRIMARY KEY,
            main_heading TEXT,
            subheading TEXT,
            main_photo TEXT,
            p1_heading TEXT,
            p1_body TEXT,
            mid_photo1 TEXT,
            mid_photo2 TEXT,
            p2_heading TEXT,
            p2_body TEXT,
            footer_photo TEXT
        );
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            first_name TEXT NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL 
        );
        CREATE TABLE user_websites (
            user_website_id SERIAL PRIMARY KEY, 
            user_id INTEGER REFERENCES users(user_id),
            website_id INTEGER REFERENCES website_content(website_id)
        );
        `);
  } catch (error) {
    console.log("error creating tables");

  }
}

const createInitialWebsiteContent = async () => {
  try {
    for (const website of websiteContent) {
      await client.query(
        `
            INSERT INTO website_content(main_heading, subheading, main_photo, p1_heading, p1_body, mid_photo1, mid_photo2, p2_heading, p2_body, footer_photo)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
        `,
        [
          website.main_heading,
          website.subheading,
          website.main_photo,
          website.p1_heading,
          website.p1_body,
          website.mid_photo1,
          website.mid_photo2,
          website.p2_heading,
          website.p2_body,
          website.footer_photo,
        ]
      );
    }
    console.log("Created Website Content table!");
  } catch (error) {
    throw error;
  }
};

const createInitialUsers = async () => {
  try {
    for (const user of users) {
      await client.query(
        `
            INSERT INTO users(first_name, username, password)
            VALUES($1, $2, $3);
        `,
        [user.first_name, user.username, user.password]
      );
    }
    console.log("Created Users table!");
  } catch (error) {
    throw error;
  }
};

const createInitialUserWebsites = async () => {
  try {
    for (const userWebsite of userWebsites) {
      await client.query(
        `
                INSERT INTO user_websites(user_id, website_id)
                VALUES($1, $2);
            `,
        [userWebsite.user_id, userWebsite.website_id]
      );
    }
    console.log("Created User Websites table!");
  } catch (error) {
    throw error;
  }
};

const buildDb = async () => {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialWebsiteContent();
    await createInitialUsers();
    await createInitialUserWebsites();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};
buildDb();
