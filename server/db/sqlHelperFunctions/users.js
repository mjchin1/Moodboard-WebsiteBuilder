const client = require("../client");

async function createUser(body) {
  const { firstName, username, password } = body;
  try {
    const { rows } = await client.query(
      `
        INSERT INTO users(first_name, username, password)
        VALUES($1, $2, $3)
        RETURNING *;
        `,
      [firstName, username, password]
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

async function getUserById(id) {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM users
      WHERE users.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw new Error(`Could not get user because ${error.message} :(`);
  }
}

async function getUserByUsername(username) {
  try {
    const { rows } = await client.query(`
        SELECT * FROM users
        WHERE users.username = '${username}'
        `);
    return rows;
  } catch (error) {
    throw new Error(`Failed to log user in because ${error.message}`);
  }
}

async function logUserIn(body) {
  const { username, password } = body;
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM users
          WHERE username = $1 AND password = $2;
      `,
      [username, password]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const { rows } = await client.query(
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
  logUserIn,
  getUserByUsername,
  deleteUser,
};
