import { Router } from "express";
import ClasseController from "../controllers/classe.controller";

const router = Router();

router.post("/classe", ClasseController.createClasse);
router.get("/classe", ClasseController.getAllClasses);
router.get("/classe/:id", ClasseController.getClasseById);
router.put("/classe/:id", ClasseController.updateClasse);
router.delete("/classe/:id", ClasseController.deleteClasse);

export default router;
