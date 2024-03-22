const client = require("../client");

async function getAllUserWebsites() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM user_websites;
      `);
    return rows;
  } catch (error) {
    throw new Error(`Failed to get all websites: ${error.message}`);
  }
}

async function getUserWebsiteById(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM user_websites
          WHERE user_website_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to get website by id: ${error.message}`);
  }
}

async function addToSavedWebsites(body) {
  const { user_id, website_id } = body;
  try {
    const { rows } = await client.query(
      `
          INSERT INTO user_websites(user_id, website_id)
          VALUES($1, $2)
          RETURNING *;
      `,
      [user_id, website_id]
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to add to saved websites: ${error.message}`);
  }
}

async function deleteSavedWebsite(id) {
  try {
    const { rows } = await client.query(
      `
          DELETE FROM user_websites
          WHERE user_website_id = $1
          RETURNING *;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to delete saved website: ${error.message}`);
  }
}

async function getSavedWebsitesByUserId(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM website_content
          INNER JOIN user_websites
          ON user_websites.website_id = website_content.website_id
          WHERE user_websites.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw new Error(`Failed to get websites by user Id: ${error.message}`);
  }
}

module.exports = {
  getAllUserWebsites,
  getUserWebsiteById,
  addToSavedWebsites,
  deleteSavedWebsite,
  getSavedWebsitesByUserId,
};
