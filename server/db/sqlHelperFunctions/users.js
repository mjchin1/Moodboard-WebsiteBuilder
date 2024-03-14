const client = require("../client");

async function createUser(body) {
  const { first_name, username, password } = body;
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        INSERT INTO users(first_name, username, password)
        VALUES($1, $2, $3)
        RETURNING *;
        `,
      [first_name, username, password]
    );
    return users;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE users.user_id = $1;
      `,
      [id]
    );
    return user;
  } catch (error) {
    throw new Error(`Could not get user because ${error.message} :(`);
  }
}

async function getUserByUsername(username) {
  try {
    const { rows: user } = await client.query(`
        SELECT * FROM users
        WHERE users.username = '${username}'
        `);
    return user;
  } catch (error) {
    throw new Error(`Failed to log user in because ${error.message}`);
  }
}

async function deleteUser(id) {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
        DELETE FROM users
        WHERE id=$1
        RETURNING *;
        `,
      [id]
    );
  } catch (error) {
    throw new Error(`Failed to delete user because ${error.message}`);
  }
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  deleteUser,
};
