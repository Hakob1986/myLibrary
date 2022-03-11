import express from "express";
import { Rentcontroler } from "./controller";

const router = express.Router();

router.get("/", Rentcontroler.getAllRentBook);
router.get("/max",Rentcontroler.getBookMaxRate);
router.patch("/:id",Rentcontroler.updateRentBook);
router.post("/", Rentcontroler.addRentBook);
router.delete("/:id",Rentcontroler.deleteRentBook);
router.get("/findavg", Rentcontroler.findSumRated)

export default router;
