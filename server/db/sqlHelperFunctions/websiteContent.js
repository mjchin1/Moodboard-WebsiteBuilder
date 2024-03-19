const client = require("../client");

async function createWebsite(body) {
  const {
    mainHeading,
    subheading,
    mainPhoto,
    p1Heading,
    p1Body,
    midPhoto1,
    midPhoto2,
    p2Heading,
    p2Body,
    footerPhoto,
  } = body;
  try {
    const {
      rows: [website],
    } = await client.query(
      `
          INSERT INTO website_content(main_heading, subheading, main_photo, p1_heading, p1_body, mid_photo1, mid_photo2, p2_heading, p2_body, footer_photo)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING *;
      `,
      [
        mainHeading,
        subheading,
        mainPhoto,
        p1Heading,
        p1Body,
        midPhoto1,
        midPhoto2,
        p2Heading,
        p2Body,
        footerPhoto,
      ]
    );
    return website;
  } catch (error) {
    throw new Error(`Failed to create website: ${error.message}`);
  }
}

async function getWebsiteById(id) {
  try {
    const {
      rows: [website],
    } = await client.query(
      `
          SELECT * FROM website_content
          WHERE website_content.website_id = $1;
      `,
      [id]
    );
    return website;
  } catch (error) {
    throw new Error(`Failed to fetch website: ${error.message}`);
  }
}

async function deleteWebsite(id) {
  try {
    const {
      rows: [website],
    } = await client.query(
      `
        DELETE FROM website_content
        WHERE website_id = $1
        RETURNING *;
      `,
      [id]
    );
    return website;
  } catch (error) {
    throw new Error(`Failed to delete website: ${error.message}`);
  }
}

async function updateWebsite(id, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [websites],
    } = await client.query(
      `
      UPDATE website_content
      SET ${setString}
      WHERE website_id=${id}
      RETURNING *;
      `,
      Object.values(fields)
    );
    return websites;
  } catch (error) {
    throw new Error(`Website update failed: ${error.message}`);
  }
}

module.exports = {
  createWebsite,
  getWebsiteById,
  deleteWebsite,
  updateWebsite,
};
