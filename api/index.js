const router = require("express");
const express = require("express");
const apiRouter = express.Router();

const BASE_URL = "/api";

const {
  getAllLinks,
  createLink,
  createInitialLinks,
  createTags,
  getAllTags,
  getLinkByID
} = require("../data_layer");

apiRouter.get(`/Links`, async (req, res, next) => {
  try {
    const allLinks = await getAllLinks();
    res.send({
      Links: allLinks,
    });
  } catch (error) {
    next(error);
  }
});

apiRouter.get(`/tags`, async (req, res) => {
  try {
    const allTags = await getAllTags();

    console.log("these are my tags", allTags);

    res.send({
      allTags,
    });
  } catch (error) {
    console.log("error in posts", error);
  }
});

apiRouter.post("/links", async (req, res, next) => {
  const { link, comment, clickcount, tags } = req.body;
  try {
    const link = await createLink(req.body);

    res.send({
      link,
    });
  } catch (error) {
    next(error);
  }
});

apiRouter.patch("/links/:id", async (req, res, next) => {
  const { linkId, link, comment, clickCount, tags } = req.body;
  console.log("The req.body is", req.body);

  const updateFields = {};

  if (link) {
    updateFields.link = link;
  }

  if (comment) {
    updateFields.comment = comment;
  }

  if (clickCount) {
    updateFields.clickcount = clickCount;
  }

  if (tags) {
    updateFields.tags = tags;
  }

  try {
    const originalLink = await getLinkById(linkId);
    console.log("the original link is", originalLink);

    console.log("The update fields are", updateFields);

    if (originalLink.id === linkId) {
      const updatedLink = await updateLink(linkId, updateFields);
      res.send({ link: updatedLink });
    } else {
      next({
        message: "Error updating link",
      });
    }
  } catch (error) {
    throw error;
  }
});

// GET /api/links
// GET /api/tags/:tagName/links

// POST /api/links (creates tags during link creation)
// PATCH /api/links/:id (used both to update comment/tags as well as to increment the click count)

module.exports = {
  apiRouter,
};
