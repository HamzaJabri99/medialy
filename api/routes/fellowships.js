import exporess from "express";
import {
  addFollow,
  deleteFollow,
  getFollows,
} from "../controllers/fellowship.js";
const router = exporess.Router();
router.get("/", getFollows);
router.post("/", addFollow);
router.delete("/", deleteFollow);

export default router;
